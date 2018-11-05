import React from "react";
import Home from "./pages/HomePage";
import UsersList from "./pages/UsersListPage";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...UsersList,
    path: "/users"
  }
];
