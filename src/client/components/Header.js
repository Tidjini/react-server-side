import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ curretUser }) => {
  return {
    curretUser
  };
};

export default connect(mapStateToProps)(Header);
