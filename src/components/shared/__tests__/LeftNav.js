import React from 'react';
import { render } from 'react-testing-library';
import { LeftNav } from '..';

describe('LeftNav component', () => {
  test('it renders <LeftNavBar />', () => {
    const leftNav = render(<LeftNav />);
    expect(leftNav).toBeTruthy();
  });
});
