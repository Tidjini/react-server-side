import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default req => {
  const store = createStore(reducer, {}, applyMiddleware(thunk));
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    `;
};
