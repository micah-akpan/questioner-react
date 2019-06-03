import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MeetupsPage from '../MeetupsPage';

describe('MeetupsPage Component', () => {
  test('it renders <MeetupsPage />', () => {
    const meetupsPage = render(
      <Router>
        <MeetupsPage />
      </Router>
    );
    expect(meetupsPage).toBeTruthy();
  });
});
