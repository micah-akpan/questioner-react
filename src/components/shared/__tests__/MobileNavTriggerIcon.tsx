import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileNavTriggerIcon } from '..';

describe('MobileNavTriggerIcon Component', () => {
  test('it renders <MobileNavTriggerIcon />', () => {
    const mobileNavTriggerIcon = render(
      <MobileNavTriggerIcon />
    );
    expect(mobileNavTriggerIcon).toBeTruthy();
  });
});
