import React from 'react';
import { render } from '@testing-library/react';
import { RightNav } from '..';

describe('RightNav component', () => {
  test('it renders <RightNav />', () => {
    const rightNav = render(<RightNav />);
    expect(rightNav).toBeTruthy();
  });
});
