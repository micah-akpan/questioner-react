import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import App from '../App';
import mockStoreData from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

describe('App Component', () => {
  test('it renders <App />', () => {
    const app = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(app).toBeTruthy();
  });
});
