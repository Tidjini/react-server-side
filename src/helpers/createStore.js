import React from "react";
import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import {
    Provider
} from "react-redux";

import reducers from "../client/reducers";

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
}