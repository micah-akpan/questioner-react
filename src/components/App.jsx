import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Index';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
