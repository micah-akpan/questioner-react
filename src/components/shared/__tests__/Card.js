import React from 'react';
import { render } from 'react-testing-library';
import { Card } from '..';

describe('Card Component', () => {
  test('it renders <Card />', () => {
    const card = render(<Card />);
    expect(card).toBeTruthy();
  });
});
