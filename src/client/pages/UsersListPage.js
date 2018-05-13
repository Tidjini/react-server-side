import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Users List App</title>
          <meta
            property="og:title"
            content="Users App List for react ssr (server side rendering)"
          />
        </Helmet>
        Here's a big list of the users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { users };
};

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};
