import "babel-polyfill"; //for async await issue

//turn to a universal javascript
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

//for routes
import { matchRoutes } from "react-router-config";
//proxy library of express
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import { rejects } from "assert";

const app = express();

//config the proxy
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator: opts => {
      opts.headers["x-forwarded-host"] = "localhost:3000"; //
      return opts;
    }
  })
);

app.use(express.static("public"));

//handle the root get request
app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    console.log(context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
