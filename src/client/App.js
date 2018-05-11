import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

//import { fetchCurrentUser } from "../actions";

const App = ({ route }) => {
  return (
    <div>
      <h1>heloo </h1>
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
