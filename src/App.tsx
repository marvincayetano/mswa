import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Favourite from './pages/Favourite';

interface AppProps {}

export default function App({}: AppProps) {
  return (
    <Router>
      <div className="h-screen bg-blue-50 pl-72 pr-72">
        <Nav />

        <Switch>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
