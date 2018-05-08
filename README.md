# react-server-side

## next refectoring for cleaner code

    1/ to not duplicate code of webpack babel config in client and server side config we use webpack-merge library
        - first create the webpack.base.js for base config:
            module.exports = {
                module: {
                    rules: [
                        {
                            test: /\.js?$/,
                            loader: "babel-loader",
                            exclude: /node_modules/,
                            options: {
                            presets: [
                                "react",
                                "stage-0",
                                ["env", { target: { browsers: ["last 2 versions"] } }]
                            ]
                            }
                        }
                    ]
                }
            }
        -second add the merge and base file to both client/server configs
            const merge = require("webpack-merge");
            const baseConfig = require("./webpack.base.js");
            const config = {...}
            module.exports = merge(baseConfig, config);
    --check--
    commit -m "merging webpack config";


    2/ npm-run-all lib to run multiple script inside the script section of package.json
        "dev" :"npm-run-all --parallel dev:*", //to not confuse the npm run all rename dev:build:server/client => dev:build-server/client
        --check--
        commit -m "Single script startup";

    3/webpack-node-externals to escape to bundle the require files like react/express/react-dom (in server side)
        in webpack.server.js:
            const webpackNodeExternals = require("webpack-node-externals");

            const config = {
                ..
                ..
                externals : [webpackNodeExternals()] //so any thing inside node_modules do not bundle it
            }
        --check-
        commit 'Ignoring files with webpack (server side)';
    4/create a helper file called renderer inside Helpers folder to handle the render function for the Home compo
        helpers/renderer.js :
            import React from "react";
            import { renderToString } from "react-dom/server";
            import Home from "../client/components/Home";

            export default () => {
                const content = renderToString(<Home />);
                return `
                    <html>
                    <head></head>
                    <body>
                        <div id="root">${content}</div>
                        <script src="bundle.js"></script>
                    </body>
                    </html>

                `;
            }
        in index.js
            clear :
                import React from "react";
                import { renderToString } from "react-dom/server";
                import Home from "./client/components/Home";
            add :
                import renderer from "./helpers/renderer";

                ...

                res.send(renderer());
                ...

            commit "Renderer helper"
