import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import App from '../App';

describe('App Component', () => {
  test('it renders <App />', () => {
    const app = render(
      <Router>
        <App />
      </Router>
    );
    expect(app).toBeTruthy();
  });
});
