import React from 'react';
import { render } from 'react-testing-library';
import { UpcomingMeetupCard } from '..';
import meetupsMock from '../__mocks__/meetups';

describe('UpcomingMeetupCard Component', () => {
  test('it renders <UpcomingMeetupCard />', () => {
    const upcomingMeetupCard = render(<UpcomingMeetupCard meetup={meetupsMock.meetups[0]} />);
    expect(upcomingMeetupCard).toBeTruthy();
  });
});
