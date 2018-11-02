/***
 * @author Shiming Chen <chen@lemontv.me>
 */

import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
  user: userReducer
});
