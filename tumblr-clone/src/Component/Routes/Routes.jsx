import React from "react";
import { Route, Switch } from "react-router-dom";
import { Explore } from "../../Pages/Explore";
import { Dashboard, Home } from "../../Pages/Dashboard";
import { Inbox } from "../../Pages/Inbox";
import {Navbar} from "../Navbar"

function Routes() {
  return (
    <div>
      <Route path="/" render={() => <Navbar />} />
      <Route path="/dashboard" render={() => <Dashboard/>} />
      <Route path="/trending/explore" render={() => <Explore/>} />
      <Route path="/inbox" render={() => <Inbox/>} />
      
    </div>
  );
}

export default Routes;
