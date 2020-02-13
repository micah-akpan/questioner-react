import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { GetStartedSection } from '..';

describe('GetStartedSection Component', () => {
  test('it renders <GetStartedSection />', () => {
    const getStartedSection = render(
      <Router>
        <GetStartedSection />
      </Router>
    );
    expect(getStartedSection).toBeTruthy();
  });

  test('it displays a getting started link button', () => {
    const { getByText } = render(
      <Router>
        <GetStartedSection />
      </Router>
    );
    const element = getByText('Get started now for free');
    expect(element.tagName).toEqual('A');
    expect(element.getAttribute('role')).toEqual('button');
  });

  test('it displays a getting started heading', () => {
    const { getByText } = render(
      <Router>
        <GetStartedSection />
      </Router>
    );
    const element = getByText('It\'s easy to get started');
    expect(element.tagName).toEqual('H3');
  });
});
