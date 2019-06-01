import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import mockStoreData from '../../__mocks__/store';
import HomePage from '../Index';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('HomePage Component', () => {
  test('it renders <HomePage />', () => {
    const homePage = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    expect(homePage).toBeTruthy();
  });
});
