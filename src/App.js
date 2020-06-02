import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routers from './Routers';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <div className="wrap-page">
      <Navigation />
      <Routers />
    </div>
  </Router>
);

export default App;
