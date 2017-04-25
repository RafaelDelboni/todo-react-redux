import ajaxStatusReducer from './ajaxStatusReducer';
import * as actions from '../actions/ajaxStatusActions';

describe('Ajax Reducer', () => {
  it('should sum 1 to ajaxCallsInProgress when BEGIN_AJAX_CALL is called', () => {
    // arrange
    const initialState = 0;
    const action = actions.beginAjaxCall();

    // act
    const newState = ajaxStatusReducer(initialState, action);

    // assert
    expect(newState).toEqual(1);
  });

  it('should remove 1 to ajaxCallsInProgress when AJAX_CALL_ERROR is called', () => {
    // arrange
    const initialState = 1;
    const action = actions.ajaxCallError();

    // act
    const newState = ajaxStatusReducer(initialState, action);

    // assert
    expect(newState).toEqual(0);
  });
});