import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
import { Navbar } from "../Navbar";
import { AppContext } from "../../Context/AppContext";
import { Home } from "../../Pages/Landing/Home";
import { Login } from "../../Pages/Login/Login";
import { SignUp } from "../../Pages/SignUp/SignUp";
import { PrivateRoute } from "./PrivateRoute";

export class Routes extends Component {
  render() {
    const { isAuth, currentUser } = this.context;
    return (
      <>
        <Route path="/" render={() => isAuth && <Navbar />} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/trending/explore" render={() => <Explore />} />
          <Route path="/inbox" component={Inbox} />
          <Route
            path="/login"
            render={(props) =>
              !currentUser ? <Login {...props} /> : <Redirect to="/dashboard" />
            }
          />
          <Route
            path="/signup"
            render={(props) =>
              !currentUser ? (
                <SignUp {...props} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

Routes.contextType = AppContext;

export default Routes;
