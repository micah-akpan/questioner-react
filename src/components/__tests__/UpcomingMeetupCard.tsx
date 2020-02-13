import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { UpcomingMeetupCard } from '..';
import meetupsMock from '../__mocks__/meetups';
import mockStoreData from '../../__mocks__/store';

const middlewares = [];
const mockStore = configureMockStore(middlewares);
const store = mockStore(mockStoreData);

describe('UpcomingMeetupCard Component', () => {
  test('it renders <UpcomingMeetupCard />', () => {
    const upcomingMeetupCard = render(
      <Provider store={store}>
        <Router>
          <UpcomingMeetupCard
            meetup={meetupsMock.meetups[0]}
          />
        </Router>
      </Provider>
    );
    expect(upcomingMeetupCard).toBeTruthy();
  });
});
