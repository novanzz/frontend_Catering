import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./middelware/middelware-route";
import Loadable from 'react-loadable'

import LoginPage from './features//Login/index';
import Dashboard from './features//Dashboard/components/Dashboard';
import Containers from './containers/index';

function Loading() {
  return <div>Loading...</div>;
}

const Dummy = Loadable({
  loader: () => import('./features//Dummy/index'),
  loading: Loading,
});

const Dummyz = Loadable({
  loader: () => import('./features//Dummyzz/index'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div className="App"> */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          {/* dashboard partial */}
          <Route exact path="/containers" component={Containers} ></Route>
          <PrivateRoute exact path="/dummy" name='Dummy' component={Dummy&&Containers} ></PrivateRoute>
          <PrivateRoute exact path="/dummyz" name='Dummyz' component={Dummyz&&Containers} ></PrivateRoute>
          <Route path="/dashboard" component={Dashboard} />
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
