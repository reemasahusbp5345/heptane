import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
import {Navbar} from "../Navbar"
import {Landing} from '../../Pages/Landing/Landing'
import {AppContext} from '../../Context/AppContext'
import {Home} from '../../Pages/Landing/Home'


export class Routes extends Component {
  render() {
    const {isAuth} = this.context
    return (
      <div>
        <Route path="/" render={() => isAuth && <Navbar /> } />
        <Route path="/dashboard" render={() => <Dashboard/>} />
        <Route path="/trending/explore" render={() => <Explore/>} />
        <Route path="/inbox" render={() => <Inbox/>} />
        <Route path="/landing" render={() => <Home />} />
      </div>
    );
  }
}

Routes.contextType = AppContext

export default Routes;