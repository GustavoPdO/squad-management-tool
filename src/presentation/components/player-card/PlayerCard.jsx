import {Card} from '@material-ui/core';
import {useStyles} from './player-card.styles';

export const PlayerCard = () => {
  const classes = useStyles();

  return (
    <Card component="section" elevation={0} className={classes.container}>
      <div className={classes.nameRow}>
        <p>
          <strong>Name:</strong> Cristiano Ronaldo
        </p>
        <p>
          <strong>Age:</strong> 32
        </p>
      </div>
      <p>
        <strong>Nacionality:</strong> Portugal
      </p>
    </Card>
  );
};
