import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import MeetupsPage from '../MeetupsPage';
import mockStoreData from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('MeetupsPage Component', () => {
  test('it renders <MeetupsPage />', () => {
    const meetupsPage = render(
      <Provider store={store}>
        <Router>
          <MeetupsPage />
        </Router>
      </Provider>
    );
    expect(meetupsPage).toBeTruthy();
  });
});
