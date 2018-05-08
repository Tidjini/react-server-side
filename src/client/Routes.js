import React from "react";
import { Router } from "react-router-dom";
import Home from "./components/Home";

export default () => {
  return (
    <div>
      <Router exact path="/" component={Home} />
    </div>
  );
};
