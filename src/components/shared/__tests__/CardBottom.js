import React from 'react';
import { render } from 'react-testing-library';
import { CardBottom } from '..';

describe('CardBottom Component', () => {
  test('it renders <CardBotton />', () => {
    const cardBottom = render(<CardBottom />);
    expect(cardBottom).toBeTruthy();
  });
});
