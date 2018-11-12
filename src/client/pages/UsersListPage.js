import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users Clint</title>
          <meta property="og:title" content="Clint Users" />
        </Helmet>
        Here is a list of users.
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  // console.log("i am loading data");
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UserList)
};
