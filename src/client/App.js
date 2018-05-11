import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";

//import { fetchCurrentUser } from "../actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

// const mapStateToProps = state => {
//   const { users } = state;
//   return { users };
// };

// function loadData(store) {
//   return store.dispatch(fetchUsers());
// }

export default {
  component: connect(null)(App)
};
