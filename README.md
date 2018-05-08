# react-server-side

## next

    add the server webpack configuration (out of src folder) create webpack.server.js file
    first informe the webpack that we build bundle for server (nodeJS) side rather then the browser side
    module.exports = {
        target : "node",
    };

    second specify the entry point of the server application
    ..
        entry : "./src/index.js",
    ..

    3/ tell webpack where to put the generated build file (bundle.js)
    ..
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "build") => require the path module (const path = require("path"))
        },
    ..  
    4/ tell webpack to run babel on each js file and get the ES5 js
    ..
        module :{
            rules:[
                {
                    test: /\.js?$/, // check all js files (do not get html or css or other files)
                    loader: 'babel-loader', //run the babel loader
                    exclude: /node_modules/, //do not run on node modules
                    options: {
                        presets:[
                            'react',  //to convert JSX => JS
                            'stage-0',  //for some async staff
                            ['env', {target: {browsers: ['last 2 versions']}}]
                        ]
                    }
                }
            ]
        }

## next

    add the build script to the script section in package.json file
        "dev:build:server" : "webpack --config webpack.server.js"
