import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";

import "./App.scss";

const App = () => (
  <Switch>
    <Route path="/" component={Home} key="/" exact={true} />
    <Route path="/login" component={Login} key="/login" />
    <Route path="/admin" component={AdminPage} key="/admin" />
  </Switch>
);

export default App;
