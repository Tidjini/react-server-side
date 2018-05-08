# react-server-side

## next Adding navigation

    1/ instead of using the traditional express router handler we implement the suport React router (just for displaying perpose html...)
    with our architecter we use Router.js to handle both browser router and static router (for React Server Side)
        client/Router.js:
            import React from "react";
            import { Router } from "react-router-dom";
            import Home from "./components/Home";

            export default () => {
                return (
                    <div>
                        <Router exact path="/" component={Home}>
                    </div>
                )
            }

        client/client.js:
            import React from "react";
            import ReactDOM from "react-dom";
            import {BrowserRouter} from "react-router-dom";
            import Routes from "./Routes";

            ReactDOM.hydrate(
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
                , document.querySelector("#root"));

        commit "adding routes handler to the client side (BrowserRouter)"
    2/More configuration in Route config
        in renderer.js:
            import React from "react";
            import { renderToString } from "react-dom/server";
            import {StaticRouter} from "react-router-dom";
            import Routes from "../client/Routes";

            export default () => {
                const content = renderToString(
                    <StaticRouter context={{}}> //must add the require porp context (here we pass into it empty object)
                        <Routes/>
                    </StaticRouter>
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
        //to comunicate with the express app route handler we pass the req (user request) to the renderer function and set it as location to Static Router
            export default (req) => {
                ..
                <StaticRouter location={req.path} context={{}}>

            }
            in index.js => res.send(renderer(req));

        commit "Add Routes to Server side with StaticRouter"

        3/Routing Tiers
            add some routing to the app
            in Routes.js
            ..
            <Router exact path="/hi" component={() => "hi"}>
            ..

            then change app.get("/" .. ) to handle all routes ("*")

            commit "make the express app handle all routes and pass it to react router dom"

