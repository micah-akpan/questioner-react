import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const MeetupDetail = lazy(() => import('../pages/MeetupDetail'))
const Meetups = lazy(() => import('../pages/Meetups'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Header = lazy(() => import('./shared/Header'))
const Footer = lazy(() => import('./shared/Footer'))

const App = () => (
  <Suspense fallback={<p>Loading content....</p>}>
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/meetups/:id" component={MeetupDetail} />
          <Route path="/meetups" component={Meetups} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  </Suspense>
);

export default App;
