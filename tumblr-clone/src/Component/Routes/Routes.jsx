import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
import {Navbar} from "../Navbar"
import {AppContext} from '../../Context/AppContext'
import {Home} from '../../Pages/Landing/Home'
import {Login} from '../../Pages/Login/Login'
import {PrivateRoute} from './PrivateRoute'


export class Routes extends Component {
  render() {
    const {isAuth} = this.context
    return (
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
    );
  }
}

Routes.contextType = AppContext

export default Routes;