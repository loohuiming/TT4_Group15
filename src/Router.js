import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Balance from './components/Balance'
//import ViewTransaction from './components/viewTransaction'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import AddTransaction from './components/AddTransaction';

export default function Router() {
    const LoginContainer = () => (
        <div className="container">
          <PrivateRoute exact path="/" component={Login} />
        </div>
      );

      const DefaultContainer = () => (
        <div>
          <div className="container">
            {<PrivateRoute path="/balance" component={Balance} />}
            <PrivateRoute path="/addTransaction" component={AddTransaction} />
          </div>
        </div>
      );
    return (
        <BrowserRouter>
        <div>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <PrivateRoute exact path="/" component={LoginContainer} />
            <PrivateRoute component={DefaultContainer} />
            <PrivateRoute path="/balance" component={Balance} />
            <PrivateRoute path="/addTransaction" component={AddTransaction} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}
