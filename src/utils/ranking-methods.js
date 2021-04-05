import moment from 'moment';

export function getTeamAvgAges(teams) {
  return teams.map(team => {
    return {
      name: team.name,
      avgAge:
        team.selectedPlayers
          .map(player => {
            const age = moment().diff(
              moment(player.birthdate, 'DD/MM/YYYY'),
              'years',
            );
            return isNaN(age) ? 0 : age;
          })
          .reduce((total = 0, value) => total + value, 0) /
        team.selectedPlayers.length,
    };
  });
}
