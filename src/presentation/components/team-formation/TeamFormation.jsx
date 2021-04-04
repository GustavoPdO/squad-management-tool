import {useMemo} from 'react';
import PlayerCard from '../player-card/PlayerCard';
import {useStyles} from './team-formation.styles';

const TeamFormation = ({formation, players, removePlayer, ...props}) => {
  const formationArray = useMemo(() => {
    return formation.split('-');
  }, [formation]);

  const classes = useStyles({formationArray, ...props});

  return (
    <section className={classes.teamConfig}>
      {players.map(player => (
        <PlayerCard
          key={player.player_id}
          player={player}
          removePlayer={removePlayer}
          isSelected
        />
      ))}
    </section>
  );
};

export default TeamFormation;
