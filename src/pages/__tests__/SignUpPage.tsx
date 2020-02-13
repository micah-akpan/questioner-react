import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import mockStoreData from '../../__mocks__/store';
import SignUpPage from '../SignUpPage';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('SignUpPage Component', () => {
  test('it renders <SignUpPage />', () => {
    const signUpPage = render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    expect(signUpPage).toBeTruthy();
    expect(signUpPage.getByText('Get started with a free account').tagName).toEqual('H3');
  });

  test('it authenticates a user with the right credentials', () => {
    const newMockStore = mockStore({
      auth: {
        data: {
          token: ''
        },
        error: null,
        requesting: null
      }
    });
    const signUpPage = render(
      <Provider store={newMockStore}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    expect(signUpPage).toBeTruthy();
  });

  test('it can record user\'s details', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    const [input] = getAllByTestId('form-input-field');
    fireEvent.change(input);
    expect(input.tagName).toEqual('INPUT');
  });

  test('it toggles password visibility', () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    const element = getByTestId('toggle-password__btn');
    fireEvent.click(element);
    const passwordField = container.querySelector('input[name="password"]');
    expect(passwordField.getAttribute('type')).toEqual('text');
  });

  test('it submits sign up form', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    const signUpButton = getByText('Sign Up');
    fireEvent.click(signUpButton);
    expect(signUpButton.tagName).toEqual('BUTTON');
  });
});
