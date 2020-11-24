import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
import {Navbar} from "../Navbar"
// import {Landing} from '../../Pages/Landing/Landing'
import {AppContext} from '../../Context/AppContext'
// import {Home} from '../../Pages/Landing/Home'
import {Login} from '../../Pages/Login/Login'


export class Routes extends Component {
  render() {
    const {isAuth} = this.context
    return (
      <div>
        <Route path="/" render={() =>   <Navbar /> } />
        <Route path="/dashboard" render={() => <Dashboard/>} />
        <Route path="/trending/explore" render={() => <Explore/>} />
        <Route path="/inbox" render={() => <Inbox/>} />
        {/* <Route path="/landing" render={() => <Home />} /> */}
        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}

Routes.contextType = AppContext

export default Routes;