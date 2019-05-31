import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import HomePage from '../Index';

describe('HomePage Component', () => {
  test('it renders <HomePage />', () => {
    const homePage = render(<Router><HomePage /></Router>);
    expect(homePage).toBeTruthy();
  });
});
