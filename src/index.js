import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './resources/scss/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <App name="Questioner" />,
  </Provider>,
  document.getElementById('app')
);
