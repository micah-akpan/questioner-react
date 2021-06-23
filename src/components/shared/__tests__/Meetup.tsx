import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { Meetup } from '..';
import meetupsMock from '../../__mocks__/meetups';
import mockStoreData from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('Meetup Component', () => {
  test('it renders <Meetup />', () => {
    const meetup = render(
      <Provider store={store}>
        <Router>
          <Meetup
            meetup={meetupsMock.meetups[0]}
          />
        </Router>
      </Provider>
    );
    expect(meetup).toBeTruthy();
  });
});
