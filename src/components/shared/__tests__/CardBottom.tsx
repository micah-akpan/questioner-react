import { render } from '@testing-library/react';
import { CardBottom } from '..';

describe('CardBottom Component', () => {
  test('it renders <CardBotton />', () => {
    const cardBottom = render(<CardBottom />);
    expect(cardBottom).toBeTruthy();
  });
});
