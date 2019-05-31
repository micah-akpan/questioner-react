import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  test('it renders <NavBar />', () => {
    const navBar = render(
      <Router>
        <NavBar classes="home-nav" />
      </Router>
    );
    expect(navBar).toBeTruthy();
  });
});
