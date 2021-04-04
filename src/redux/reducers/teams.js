import {
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM,
  UPDATE_TEAM,
  RESET_ACTIVE_TEAM,
} from '../actions/teams';

const initialState = {
  teamId: 0, //we need a local id validation for deleting the correct team
  teams: [],
  activeTeam: undefined,
};

export default function TeamsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TEAM:
      return {
        ...state,
        teamId: state.teamId + 1,
        teams: [...state.teams, {...action.payload.team, id: state.teamId}],
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter(team => team.id !== action.payload.teamId),
      };
    case EDIT_TEAM:
      return {
        ...state,
        activeTeam: action.payload.team,
      };
    case UPDATE_TEAM:
      const newState = {...state};
      let editingTeamIndex = state.teams.findIndex(
        team => team.id === action.payload.team.id,
      );
      newState.teams[editingTeamIndex] = action.payload.team;
      return newState;
    case RESET_ACTIVE_TEAM:
      return {
        ...state,
        activeTeam: undefined,
      };
    default:
      return state;
  }
}
