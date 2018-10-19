import { combineReducers } from 'redux';
import { navReducer as nav } from 'navigation';
import user from './user';
import { reducer as notification } from './notification';

export default combineReducers({
  nav,
  user,
  notification,
});
