import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, SignUpPage, LoginPage, MeetupsPage } from '../pages';
import { Footer } from './shared';

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path="/meetups" component={MeetupsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
    <Footer />
  </Fragment>
);

export default App;
