import {getTeamAvgAges} from '../../utils/ranking-methods';
import {
  ADD_TEAM,
  DELETE_TEAM,
  EDIT_TEAM,
  UPDATE_TEAM,
  RESET_ACTIVE_TEAM,
  CALCULATE_TOP_FIVE,
  GET_MOST_LESS_PICKED,
} from '../actions/teams';

const initialState = {
  teamId: 0, //we need a local id validation for deleting the correct team
  teams: [],
  activeTeam: undefined,
  highestAvgAgeList: [],
  lowestAvgAgeList: [],
  lessPickedPlayer: undefined,
  mostPickedPlayer: undefined,
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
    case CALCULATE_TOP_FIVE:
      if (state.teams.length === 0)
        return {
          ...state,
          highestAvgAgeList: [],
          lowestAvgAgeList: [],
        };

      const list = getTeamAvgAges(state.teams);
      return {
        ...state,
        highestAvgAgeList: list
          .slice()
          .sort((a, b) => (a.avgAge > b.avgAge ? -1 : 1)),
        lowestAvgAgeList: list
          .slice()
          .sort((a, b) => (a.avgAge > b.avgAge ? 1 : -1)),
      };
    case GET_MOST_LESS_PICKED:
      if (state.teams.length === 0) {
        return {
          ...state,
          lessPickedPlayer: undefined,
          mostPickedPlayer: undefined,
        };
      }
      let players = state.teams.map(team => team.selectedPlayers).flat(1);

      let pickingCount = players.reduce(
        (id, player) => (
          // eslint-disable-next-line
            (id[player.player_id] = (id[player.player_id] || 0) + 1), id
        ),
        {},
      );
      pickingCount = Object.entries(pickingCount).sort(([, a], [, b]) => a - b);
      const totalPlayersPicked = pickingCount.reduce(
        (total, value) => total + value[1],
        0,
      );
      let lessPicked = players.find(
        player => player.player_id.toString() === pickingCount[0][0],
      );
      lessPicked.pickingRatio = (pickingCount[0][1] / totalPlayersPicked) * 100;
      let mostPicked = players.find(
        player =>
          player.player_id.toString() ===
          pickingCount[pickingCount.length - 1][0],
      );
      mostPicked.pickingRatio =
        (pickingCount[pickingCount.length - 1][1] / totalPlayersPicked) * 100;

      return {
        ...state,
        lessPickedPlayer: lessPicked,
        mostPickedPlayer: mostPicked,
      };

    default:
      return state;
  }
}
