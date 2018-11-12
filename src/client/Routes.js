import React from "react";
import App from "./App";
import Home from "./pages/HomePage";
import UsersList from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersList,
        path: "/users"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
