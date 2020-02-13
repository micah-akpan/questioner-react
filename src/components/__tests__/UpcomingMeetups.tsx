import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { UpcomingMeetups } from '..';
import mockStoreData from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('InfoCard Component', () => {
  test('it renders <InfoCard />', () => {
    const infoCard = render(
      <Provider store={store}>
        <Router>
          <UpcomingMeetups />
        </Router>
      </Provider>
    );
    expect(infoCard).toBeTruthy();
  });
});
