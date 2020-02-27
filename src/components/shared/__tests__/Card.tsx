import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '..';

describe('Card Component', () => {
  test('it renders <Card />', () => {
    const card = render(<Card classList={['card', 'q-card']} />);
    expect(card).toBeTruthy();
  });
});
