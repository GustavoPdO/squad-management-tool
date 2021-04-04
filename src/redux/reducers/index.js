import {combineReducers} from 'redux';
import TeamsReducer from './teams';

const rootReducer = combineReducers({
  teams: TeamsReducer,
});

export default rootReducer;
