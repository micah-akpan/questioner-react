import React from 'react';
import { render } from 'react-testing-library';
import { CardTop } from '..';

describe('CardTop Component', () => {
  test('it renders <CardTop />', () => {
    const cardTop = render(<CardTop />);
    expect(cardTop).toBeTruthy();
  });
});
