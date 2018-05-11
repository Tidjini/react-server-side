# react-server-side

## next Authentication

    1/Auth issue:
        cookies just for domain/sub/port;
            via proxy
        Set the proxy
        index.js:
            import proxy from 'express-http-proxy';
            ..
            app.use('/api', proxy('http://react...', {
                proxkyReqOptDecorator(opts){
                    opts.header['x-forwarded-host'] = 'localhost:3000';
                    return opts;
                }
            }))
            ..
        commit 'Proxy setup';

        2/ Render to API comunication
            Create the Client axios Instance
            in Client.js


            import axios ;

            const axiosInstance = axios.create({
                baseURL : "/api",
            });

            modify thunk call to : thunk.withExtraArgument(axiosInstance)

            in actions/index.js get this third arg
            async(dispatch, getState, api)
            api.get("/users");
            remove axios import

            commit 'Create the Client axios Instance'

            --in SERVER

            in createStore.js like client but baseURL : 'http://react-ssr-api.herokuapp.com'
            and pass the req to this function to get the cookie

            in axiosInstance : headers:{cookie : req.get('cookie') || ""}

            ---RUN TEST--- proxy headers

            commit "Server Axios instance"

        3/ the header component
        create App.js inside client as the root component, (display div just as home or list)
        call it in Routes.js
        [
            {
                ...App,
                routes :[
                    ...
                ]
            }
        ]

        comeback kto App.js and call the renderRoutes (like renderer.js with route.routes props of the App)
        ----RUN TEST --- with H1 header test
        commit 'create the root app.js'

        4/create the header compo
        ...
        import {link} from 'react-router-dom';

        export default () =>{
            return (
                <div>
                    <Link to="/">React SSR</Link>
                </div>
            )
        }

        place it in App.js
        ---RUN TEST--

        5/Fetch the auth statues
        in actions/index.js
            add the FETCH_CURRENTk_USER action;
        add the auth reducer also init state with null return data || false; //not auth

        commit 'Fetch the auth current user'

        6/calling kthe fetchCurrentUser
        to handle changes in  App.js (specialy for header(Login logout button)  )
        loadData: ({dispatch}) => dispatch(fetchCurrentUser()) //import from actions
        commit 'calling the fetchCurrentUser '

        7/ connecting the header to the application state
        basic connect func with mapState auth;
        --TEST GO to api => logged in ==> Tcheck with console.log auth porps-

        commit 'connecting header to app states'

        8/ add users, admin button to header
            const authButton = auth ? (<a href ='/api/logout'>logout</a>) : (<a href='/api/auth/google'>logout</a>)

            a for the browser (kill cookies)

            ---RUN TEST--

            commit 'add the header features'

        9/ add some styling then commit
