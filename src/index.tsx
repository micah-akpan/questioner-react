import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './resources/scss/styles.scss';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { hostedAPIURL, localHostURL } from './constants'


const gQLServerUrl = process.env.NODE_ENV === 'development' ? `${localHostURL}/graphql` : `${hostedAPIURL}/graphql`;

const client = new ApolloClient({
  uri: gQLServerUrl,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>,
  </ApolloProvider>,
  document.getElementById('app')
);
