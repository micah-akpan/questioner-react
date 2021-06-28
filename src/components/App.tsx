import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { persistCache, SessionStorageWrapper } from 'apollo3-cache-persist';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hostedAPIURL, localHostURL } from '../constants';
import store from '../store';

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const MeetupDetail = lazy(() => import('../pages/MeetupDetail'))
const Meetups = lazy(() => import('../pages/Meetups'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Header = lazy(() => import('./shared/Header'))
const Footer = lazy(() => import('./shared/Footer'))

const gQLServerUrl = process.env.NODE_ENV === 'development'
  ? `${localHostURL}/graphql` : `${hostedAPIURL}/graphql`;

const App = () => {
  const [client, setClient] = useState<any>()

  useEffect(() => {
    async function initClient() {
      const cache = new InMemoryCache()

      await persistCache({
        cache,
        storage: new SessionStorageWrapper(window.sessionStorage)
      })

      setClient(new ApolloClient({
        uri: gQLServerUrl,
        cache
      }))
    }

    initClient().catch(console.error)
  }, [])

  return (
    <>
      {
        client &&
          (
            <Suspense fallback={<p>Loading content....</p>}>
              <ApolloProvider client={client}>
                <Provider store={store}>
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
                </Provider>
              </ApolloProvider>
            </Suspense>
          )
      }
    </>
  )
};

export default App;
