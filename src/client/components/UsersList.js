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
    return this.props.users.map(user => <li>{user.name}</li>);
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { users };
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
