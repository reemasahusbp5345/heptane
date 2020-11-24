import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
<<<<<<< HEAD
import { Navbar } from "../Navbar";
import { Landing } from "../../Pages/Landing/Landing";
import { AppContext } from "../../Context/AppContext";
import { Home } from "../../Pages/Landing/Home";
=======
import {Navbar} from "../Navbar"
import {AppContext} from '../../Context/AppContext'
import {Home} from '../../Pages/Landing/Home'
import {Login} from '../../Pages/Login/Login'
import {PrivateRoute} from './PrivateRoute'

>>>>>>> a2ac30a36b709f1c32c63c46818170f7d2cd77a0

export class Routes extends Component {
  render() {
    const { isAuth } = this.context;
    return (
<<<<<<< HEAD
      <div>
        <Route path="/" render={() => isAuth && <Navbar />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/trending/explore" render={() => <Explore />} />
        <Route path="/inbox" render={() => <Inbox />} />
        <Route path="/landing" render={() => <Home />} />
      </div>
=======
        <>
            <Route path="/" render={() => isAuth && <Navbar /> } />
          <Switch>
            <Route path="/" exact render={ props => <Home {...props} />} />
            <PrivateRoute path="/dashboard" Component={Dashboard} />
            <Route path="/trending/explore" render={() => <Explore/>} />
            <PrivateRoute path="/inbox" Component={Inbox} />
            <Route path="/login" render={ props =>  <Login {...props} />} />
          </Switch>
        </>
>>>>>>> a2ac30a36b709f1c32c63c46818170f7d2cd77a0
    );
  }
}

Routes.contextType = AppContext;

export default Routes;
