import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  render() {
    return <ul>{this.renderAdmins()}</ul>;
  }
  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
