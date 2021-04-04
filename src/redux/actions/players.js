import axios from 'axios';
export const GET_PLAYERS = 'GET_PLAYERS';
export const RESET_PLAYERS = 'RESET_PLAYERS';

export const getPlayers = name => {
  return dispatch => {
    axios
      .get(
        `https://soccer.sportmonks.com/api/v2.0/players/search/${name}?api_token=${process.env.REACT_APP_SPORTMONKS_TOKEN}`,
      )
      .then(response => {
        dispatch({
          type: GET_PLAYERS,
          payload: response.data,
        });
      })
      .catch(error => console.error(error));
  };
};

export const resetPlayers = () => ({
  type: RESET_PLAYERS,
});
