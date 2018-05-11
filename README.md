# react-server-side

## next Integrating support for Redux

    1/add redux libraries in helpers/renderer.js
        ..
        import {creatStore, applyMiddleware} from 'redux';
        import thunk from "redux-thunk";
        import {Provider} from "react-redux";
        ...
    2/create store : const store = createStore(reducers, {} ,applyMiddleware(thunk)); //reducers, state, functions
    <Provider store={store}>
        ....
    </Provider>
    commit "create the store for redux browser store"

    -----
    3/ for clean code create createStore.js in the helper for the last section, then in the server side entry point (index.js) add it to the renderer function
    ...
    import createStore from './helpers/createStore';
    ...

    app.get("*" ..
        const store = createStore();
        //some logic todo and some stuff to load data

        res.send(renderer(req, store));

    modify the renderer.js file :
        (req, store) => {
            <Provider store={store}> //import Provider from "react-redux"
                .....
            </Provider>
        }


    )
    commit "create the server store"

    4/create the fetch users action creator
    in client/actions/index.js
        import axios from "axios";

        export const FETCH_USERS = "fetchUsers";
        export const fetchUsers = () => async(dispatch) =>{
            const res = await axios.get("url");

            dispatch({
                type : FETCH_USERS,
                payload : res
            })

        }
    commit 'fetch users action'

    5/create the reducers for users
    client/reducers/userReducer.js
        import {FETCH_USERS} from '../actions'

        export const (state = [], actions) =>{  
            switch (actions.type){
                case FETCH_USERS:
                    return actions.payload.data;
                case Default:
                    return state;
            }
        }

    combine the reducers kin client/reducers/index.js
        import {combineReducer} from 'redux";
        import {usersReducer} from "./usersReducers";

        export default combineReducers({
            users : usersReducer
        })

    commit 'add the users reducer '

    // import the reducer to store..


    5/create the users list
        client/comp../UsersList.js
        ...
        import  {connect} from "react-redux";
         {fetchUsers} from "../actions"
        ..

        componentDidMount(){
            this.props.fetchUsers();
        }
        render(){
            return (

                <ul>
                    {this.renderUsers()}
                </ul>
            )
        }

        renderUsers(){
            return this.props.users.map(user => {
                return <li>{user.name}<li>;
            })
        }



        const mapStateToProps = (state) => {
            const {users} = state;
            return {users};
        }
        export default connect (mapStateToProps, {fetchUsers})(UsersList);

        commit with 'set users component'

        //run to test will fail cause of the async await syntax in actions to resolve this
        import 'babel-polyfill'; in index.js and client.js
