import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">logout</a>
  ) : (
    <a href="/api/auth/google">login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/users">Users</Link>
          </li>

          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
    // <div>
    //   <Link to="/">React SSR</Link>
    //   <div>
    //     <Link to="/users">Users</Link>
    //     <Link to="/admins">Admins</Link>
    //     {authButton}
    //   </div>
    // </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Header);
