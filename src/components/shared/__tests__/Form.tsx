import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '..';

describe('Form Component', () => {
  test('it renders <Form />', () => {
    const form = render(<Form />);
    expect(form).toBeTruthy();
  });
});
