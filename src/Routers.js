import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/404';
import Barcode from './pages/Barcode';
import SmartConnect from './pages/SmartConnect';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/barcode" component={Barcode} />
      <Route exact path="/smart-connect" component={SmartConnect} />
      <Route component={NoMatch} />
    </Switch>
  );
};
