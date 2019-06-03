import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Index';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import MeetupsPage from '../pages/MeetupsPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/meetups" component={MeetupsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
