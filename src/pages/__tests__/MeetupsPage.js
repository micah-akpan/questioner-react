import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react';
import MeetupsPage from '../MeetupsPage';
import mockStoreData from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('MeetupsPage Component', () => {
  test('it renders <MeetupsPage />', () => {
    const meetupsPage = render(
      <Provider store={store}>
        <Router>
          <MeetupsPage />
        </Router>
      </Provider>
    );
    expect(meetupsPage).toBeTruthy();
  });

  test('it toggles the visibility of the search icon when its clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MeetupsPage />
        </Router>
      </Provider>
    );
    const searchIcon = getByTestId('search-icon');
    const searchFormItem = getByTestId('search-form-list-item');
    fireEvent.click(searchIcon);
    expect(searchFormItem.classList.contains('search-bar__link-show')).toEqual(true);
    fireEvent.click(searchIcon);
    expect(searchFormItem.classList.contains('search-bar__link-show')).toEqual(false);
  });

  test('it hides search form when an area of the page is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MeetupsPage />
        </Router>
      </Provider>
    );
    const searchIcon = getByTestId('search-icon');
    const searchFormItem = getByTestId('search-form-list-item');
    fireEvent.click(searchIcon);
    fireEvent.click(document);
    expect(searchFormItem.classList.contains('search-bar__link-show')).toEqual(false);
  });
});
