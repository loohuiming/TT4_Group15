import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Login} from './components/Login'
import Balance from './components/Balance'
// import TodoPage from "./components/todoPage";

export default function Router() {
    const LoginContainer = () => (
        <div className="container">
          <Route exact path="/" component={Balance} />
        </div>
      );
    
      const DefaultContainer = () => (
        <div>
          <div className="container">
            {<Route path="/balance" component={Balance} />}
          </div>
        </div>
      );
    return (
        <BrowserRouter>
        <div>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route component={DefaultContainer} />
            {<Route path="/balance" component={Balance} />}
          </Switch>
        </div>
      </BrowserRouter>
    )
}
