import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/404';
import Barcode from './pages/Barcode';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/barcode" component={Barcode} />
      <Route component={NoMatch} />
    </Switch>
  );
};
