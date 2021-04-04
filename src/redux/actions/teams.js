export const ADD_TEAM = 'ADD_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';
export const EDIT_TEAM = 'EDIT_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const RESET_ACTIVE_TEAM = 'RESET_ACTIVE_TEAM';

export const addTeam = team => ({
  type: ADD_TEAM,
  payload: {
    team,
  },
});

export const deleteTeam = teamId => ({
  type: DELETE_TEAM,
  payload: {
    teamId,
  },
});

export const editTeam = team => ({
  type: EDIT_TEAM,
  payload: {
    team,
  },
});

export const updateTeam = team => ({
  type: UPDATE_TEAM,
  payload: {
    team,
  },
});

export const resetActiveTeam = () => ({
  type: RESET_ACTIVE_TEAM,
});
