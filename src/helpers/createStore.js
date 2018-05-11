import React from "react";
import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import {
    Provider
} from "react-redux";

export default () => {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return store;
}