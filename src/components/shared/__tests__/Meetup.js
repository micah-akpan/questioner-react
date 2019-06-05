import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Meetup } from '..';
import meetupsMock from '../../__mocks__/meetups';

describe('Meetup Component', () => {
  test('it renders <Meetup />', () => {
    const meetup = render(
      <Router>
        <Meetup
          meetup={meetupsMock.meetups[0]}
          questionCount={0}
        />
      </Router>
    );
    expect(meetup).toBeTruthy();
  });
});
