import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from './components/Login';
import AddTransaction from './components/AddTransaction';

export default function Router() {
    const LoginContainer = () => (
        <div className="container">
          <Route exact path="/" component={Login} />
        </div>
      );
    
      const DefaultContainer = () => (
        <div>
          <div className="container">
            <Route path="/addTransaction" component={AddTransaction} />
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
            <Route path="/addTransaction" component={AddTransaction} />
          </Switch>
        </div>
      </BrowserRouter>
    )
}
