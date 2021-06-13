import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SignUp, Login, Meetups, MeetupDetail } from '../pages';
import { Footer } from './shared';
import Header from './shared/Header';

const App = () => (
  <>
    <Header />
    <main>
      <Router>
        <Switch>
          <Route path="/meetups/:id" component={MeetupDetail} />
          <Route path="/meetups" component={Meetups} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
    <Footer />
  </>
);

export default App;
