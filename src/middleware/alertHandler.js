import { sendAlert, DELETE_WEATHER } from '../actions/index.js';

export function alertHandler(blackListedCity) {
  return ({dispatch, getState}) => next => action => {
    if (action.type == DELETE_WEATHER && action.city == blackListedCity) {
      console.log("I hit here");
      return dispatch(sendAlert("Cannot delete this city"));
    }

    return next(action);
  }
}
