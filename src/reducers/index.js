import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
import dashboard from './DashboardReducer';

export default combineReducers({
  locale,
  dashboard
});
