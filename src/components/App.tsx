import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, SignUpPage, LoginPage, MeetupsPage, MeetupDetailPage } from '../pages';
import { Footer } from './shared';
import Header from './shared/Header';

const App = () => (
  <Fragment>
    <Header />
    <Router>
      <Switch>
        <Route path="/meetups/:id" component={MeetupDetailPage} />
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
