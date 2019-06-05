import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import mockStoreData from '../../__mocks__/store';
import { HomePage } from '..';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('HomePage Component', () => {
  test('it renders <HomePage />', () => {
    const homePage = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    expect(homePage).toBeTruthy();
  });

  test('it displays nav when hamburger is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    const navTriggerIcon = getByTestId('mobile-nav-trigger-icon');
    const navMenu = getByTestId('mobile-sidenav');
    fireEvent.click(navTriggerIcon);
    expect(navMenu.classList.contains('nav-menu-show')).toEqual(true);
  });

  test('it hides the mobile nav menu when the "esc" key is pressed', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    const navTriggerIcon = getByTestId('mobile-nav-trigger-icon');
    fireEvent.click(navTriggerIcon);
    const navMenu = getByTestId('mobile-sidenav');
    fireEvent.keyDown(navTriggerIcon, {
      key: 'Escape', code: 27
    });
    expect(navMenu.classList.contains('nav-menu-show')).toEqual(false);
  });

  test('pressing the "esc" key has no effect if nav menu is not open', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    const navTriggerIcon = getByTestId('mobile-nav-trigger-icon');
    const navMenu = getByTestId('mobile-sidenav');
    fireEvent.keyDown(navTriggerIcon, {
      key: 'Escape', code: 27
    });
    expect(navMenu.classList.contains('nav-menu-show')).toEqual(false);
  });
});
