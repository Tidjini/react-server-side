import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";

import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

const mapStateToProps = ({ curretUser }) => {
  return {
    curretUser
  };
};

export default {
  component: connect(mapStateToProps)(App),
  loadData: ({ dispatch }) => dispatch.fetchCurrentUser()
};
