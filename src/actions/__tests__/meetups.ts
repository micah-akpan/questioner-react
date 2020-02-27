import {
  getMeetupsRequest,
  getMeetupsSuccess,
  getMeetupsFailure
} from '../meetups';
import * as types from '../../actionTypes/meetups';

describe('actions', () => {
  test('it should create an action to get all meetups', () => {
    getMeetupsRequest();
    const expectedAction = { type: types.GET_MEETUPS_REQUEST };
    expect(getMeetupsRequest()).toEqual(expectedAction);
  });
});
