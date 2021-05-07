import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< Updated upstream
import { Login } from './components/Login';
import AddTransaction from './components/AddTransaction';
=======
import {Login} from './components.Login'
import {Balance} from './components/Balance'
// import TodoPage from "./components/todoPage";
>>>>>>> Stashed changes

export default function Router() {
    const LoginContainer = () => (
        <div className="container">
          <Route exact path="/" component={Balance} />
        </div>
      );
    
      const DefaultContainer = () => (
        <div>
          <div className="container">
<<<<<<< Updated upstream
            <Route path="/addTransaction" component={AddTransaction} />
=======
            {<Route path="/balance" component={Balance} />}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Route path="/addTransaction" component={AddTransaction} />
=======
            {<Route path="/balance" component={Balance} />}
>>>>>>> Stashed changes
          </Switch>
        </div>
      </BrowserRouter>
    )
}
