import { render, fireEvent, getByTestId } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import mockStoreData from '../../__mocks__/store';
import Login from '../Login';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('Login Component', () => {
  test('it renders <Login />', () => {
    const LoginPage = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    expect(LoginPage).toBeTruthy();
  });

  test('it toggles password visibility', () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const element = getByTestId('toggle-password__btn');
    fireEvent.click(element);
    const passwordField = container.querySelector('input[name="password"]');
    expect(passwordField.getAttribute('type')).toEqual('text');
  });

  test('it validates wront inputs', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const emailInputField = getByPlaceholderText('dennisritchie@email.com');
    fireEvent.change(emailInputField);
    emailInputField.setAttribute('value', 'dennisritchie')
    const submitButton = getByText('Login');
    fireEvent.click(submitButton);
    expect(submitButton.tagName).toEqual('BUTTON');
  });


  test('it validates right inputs', () => {
    const { getByPlaceholderText, getByText, container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const emailInputField = getByPlaceholderText('dennisritchie@email.com');
    fireEvent.change(emailInputField);
    emailInputField.setAttribute('value',  'dennisritchie@email.com');
    const submitButton = getByText('Login');
    fireEvent.click(submitButton);
    expect(submitButton.tagName).toEqual('BUTTON');
  });
});
