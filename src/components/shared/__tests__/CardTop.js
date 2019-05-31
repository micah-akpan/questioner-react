import React from 'react';
import { render } from '@testing-library/react';
import { CardTop } from '..';

describe('CardTop Component', () => {
  test('it renders <CardTop />', () => {
    const cardTop = render(<CardTop />);
    expect(cardTop).toBeTruthy();
  });
});
