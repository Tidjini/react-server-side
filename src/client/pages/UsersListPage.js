import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return <ul>{this.renderUsers()}</ul>;
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
export { loadData };

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};