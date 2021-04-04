import {GET_PLAYERS, RESET_PLAYERS} from '../actions/players';

const initialState = {
  available: [],
};

export default function PlayersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {...state, available: action.payload.data.slice(0, 50)};
    case RESET_PLAYERS:
      return {...state, available: []};
    default:
      return state;
  }
}
