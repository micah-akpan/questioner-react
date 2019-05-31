import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import ShowCase from '../ShowCase';

describe('ShowCase Component', () => {
  test('it renders <ShowCase />', () => {
    const showCase = render(
      <Router>
        <ShowCase />
      </Router>
    );
    expect(showCase).toBeTruthy();
  });
});
