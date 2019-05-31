import React from 'react';
import { render } from 'react-testing-library';
import { Form } from '..';

describe('Form Component', () => {
  test('it renders <Form />', () => {
    const form = render(<Form />);
    expect(form).toBeTruthy();
  });
});
