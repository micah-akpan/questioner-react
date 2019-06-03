import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Meetup } from '..';
import meetupsMock from '../../__mocks__/meetups';

describe('MeetupCard Component', () => {
  test('it renders <MeetupCard />', () => {
    const meetupCard = render(
      <Router>
        <Meetup
          meetup={meetupsMock.meetups[0]}
          questionCount={0}
        />
      </Router>
    );
    expect(meetupCard).toBeTruthy();
  });
});
