import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
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
