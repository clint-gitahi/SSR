// start up file for client side app
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

ReactDOM.hydrate(<Home />, document.querySelector("#root"));
