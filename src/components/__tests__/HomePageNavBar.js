import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { HomePageNavBar } from '..';

describe('HomePageNavBar Component', () => {
  test('it renders <HomePageNavBar />', () => {
    const homePageNavBar = render(
      <Router>
        <HomePageNavBar classes="home-nav" />
      </Router>
    );
    expect(homePageNavBar).toBeTruthy();
  });
});
