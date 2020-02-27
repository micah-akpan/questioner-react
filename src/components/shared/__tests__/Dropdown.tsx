import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from '..';
import dropDownItems from '../../../utils/dropdown';

describe('Dropdown Component', () => {
  test('it renders <Dropdown />', () => {
    const dropDown = render(<Dropdown dropDownItems={dropDownItems} classList={['dropdown-menu']} />);
    expect(dropDown).toBeTruthy();
  });
});
