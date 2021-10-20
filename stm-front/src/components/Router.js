import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Account from "../routers/Account";
import Home from "../routers/Home";
import Login from "../routers/Login";
import RegisterUser from "../routers/RegisterUser";
import ShowAll from "../routers/ShowAll";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <RegisterUser></RegisterUser>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/account">
          <Account></Account>
        </Route>
        <Route exact path="/showall">
          <ShowAll></ShowAll>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
