import { SEND_ALERT } from '../actions/index';
import { remove } from 'lodash';

export default function(state = undefined, action) {
  switch(action.type) {
    case SEND_ALERT:
      return action.msg;
    default:
      return "";
  }
  return state;
}
