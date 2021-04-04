import {combineReducers} from 'redux';
import TeamsReducer from './teams';
import PlayersReducer from './players';

const rootReducer = combineReducers({
  teams: TeamsReducer,
  players: PlayersReducer,
});

export default rootReducer;
