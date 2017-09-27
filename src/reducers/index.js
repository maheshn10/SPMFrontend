import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
import dashboard from './DashboardReducer';
import login from './LoginReducer';

export default combineReducers({
  locale,
  dashboard,
  login
});
