# react-server-side

## next Server side data loading

    1/detecting data load completion problem that the HTML of app get send before component DID MOUNT
        #A solution one render twice the app (cause some issue auth/complexity ...)
        #B make sure what we rendering, and bring data

    2/use react-router-config, and convert Routes.js file this approach
    export default [
        {
            path: '/',
            component : Home,
            exact: true
        },
        {
            path: '/users',
            component : UsersList,
        },
    ]
    clean the Route compo
    commit 'add react-router-config to the app'

    3/ update the routes files: we must render the routes inside a div element
        in renderer.js/client.js replace : <Routes /> by <div>{renderRoutes(Routes)}</div> //import renderRoutes from react-router-config
        ---RUN TEST---
    commit 'Update the Routes uses'

    4/ the matchRoute function
        in the server index.js file :
            import {matchRoutes} from "react-router-config";
            import Routes from "./client/Routes";

            ..
            matchRoutes(Routes, req.path); //console log it
            ..
    commit 'Add matchRoute function in server side'

    5/ load data function
        -add loadData function in the UsersList.js (kjust console log)
        -import it in Routes.js and in user route add:
            {
                loadData,
                path: '/users',
                component : UsersList,
            },
        ---RUN TEST---
        in the server index.js
        ..
        matchRoutes(Routes, req.path).map(({route}) =>{
            return route.loadData ? route.loadData() : null;
        });
        ..
        ---RUN TEST---
    commit 'Add the load data function'

    6/ store dispatch
    change the load data to :
        function loadData(store){
            return store.dispatch(fetchUsers()); //this return a promise
        }

        add store to it in index.js
        const promises = //...//
        log it

        ---RUN TEST---
    commit 'store dispatch'

    7/ waiting for data loading
    in index.js
    ....
    Promise.all(promises).then(() => {
        res.send(renderer(req.path, store));
    })

    commit 'waiting for data loading'
