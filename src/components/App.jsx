import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Index';
import SignUpPage from '../pages/SignUpPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={SignUpPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
