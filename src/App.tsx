import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Favourite from './pages/Favourite';

interface AppProps {}

export default function App({}: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex-col h-screen bg-blue-50 px-0 lg:px-24">
        <Nav setIsModalOpen={setIsModalOpen} />
        <Switch>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/">
            <Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
