import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MobileNavMenu } from '..';
import navLinkMock from '../__mocks__/nav';

describe('MobileNavMenu Component', () => {
  test('it renders <MobileNavMenu />', () => {
    const mobileNavMenu = render(
      <Router>
        <MobileNavMenu links={navLinkMock.navigationLinks} />
      </Router>
    );
    expect(mobileNavMenu).toBeTruthy();
  });
});
