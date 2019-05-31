import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import { AuthRightNav } from '..';
import navigationMock from '../__mocks__/nav';

describe('AuthRightNav Component', () => {
  test('it renders <AuthRightNav />', () => {
    const authRightNav = render(
      <Router>
        <AuthRightNav links={navigationMock.navigationLinks} />
      </Router>
    );
    expect(authRightNav).toBeTruthy();
  });
});
