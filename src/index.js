import "babel-polyfill"; //for async await issue

//turn to a universal javascript
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();
app.use(express.static("public"));

//handle the root get request
app.get("*", (req, res) => {
  const store = createStore();

  //do some logic in server side
  //get data ....

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
