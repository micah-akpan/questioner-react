import React from 'react';
import { render } from 'react-testing-library';
import { RightNav } from '..';

describe('RightNav component', () => {
  test('it renders <RightNav />', () => {
    const rightNav = render(<RightNav />);
    expect(rightNav).toBeTruthy();
  });
});
