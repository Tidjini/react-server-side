# react-server-side

## next more server config

    1/ add the --watch flag into the config dev:build:server script to tell webpack to watch evry change in js files
        restart the server each the bundle.js change with nodemon
        dev:server : "nodemon --watch build --exec \"node build/bundle.js\"",
        commit with "webpack nodemon server watch mode"
    2/ convert the server side requiring library to import statement (universal/isomorphic javascript : same code in browser as server)
        commit with "turn to univrsal/isomorphic javascript in server side"
    3/ change the Home component to execute some dynamic code + config client side
        <div>
            <div>Welcome home</div>
            <Button onClick={() => {console.log("hi there")}}> Press Me</Button>
        </div>
        create a webpack.client.js to config the client side:
            copy and past from server side:
                remove target //cause we targeting the browser here
                and change:
                    entry: "./src/client/client.js", // add it in to client folder (in prod u can call it index.js)
                    output: {
                        filename: "bundle.js",
                        path: path.resolve(__dirname, "public")
                    },
            client.js :
                console.log("this is the entry point of client");

        create the "dev:build:client": "webpack --config webpack.client.js --watch " script in package.json

        commit with "configuration client side to get dynamic process on the browser (not just raw html)"

    4/use the public directory inside the application
        in src/index.js:
            app.use(express.static("public"));
            ..
                const content = renderToString(<Home/>);

                const html = `
                    <html>
                        <head></head>
                        <body>
                            <div>${content}</div>
                            <script src="bundle.js"></>
                        </body>
                    </html>
                `;

                res.send(html);
            ..
        commit "add the public directory (contain the dynamic js file) to the app"
    5/create the react client bootsup
        src/client/client.js:
            import React form "..";
            import ReactDom from "..";
            import Home from "..";
            //add the root id to index.js (server side) <div id="root">${content}</div>
            RactDom.render(<Home />, document.querySelector("#root")); => hydrate
