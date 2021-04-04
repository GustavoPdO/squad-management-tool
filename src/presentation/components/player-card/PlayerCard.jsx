import {Card, IconButton} from '@material-ui/core';
import {Add, Close} from '@material-ui/icons';
import {useStyles} from './player-card.styles';

const PlayerCard = ({
  player,
  isSelected,
  disabled,
  selectPlayer,
  removePlayer,
}) => {
  const classes = useStyles();

  return (
    <Card component="section" elevation={0} className={classes.container}>
      <section className={classes.infoContainer}>
        <div className={classes.nameRow}>
          <p>
            <strong>Name:</strong> {player.name}
          </p>
          <p>
            <strong>Age:</strong> {player.age}
          </p>
        </div>
        <p>
          <strong>Nacionality:</strong> {player.nacionality}
        </p>
      </section>
      <section className={classes.actionsContainer}>
        {isSelected ? (
          <IconButton onClick={() => removePlayer(player)}>
            <Close />
          </IconButton>
        ) : (
          <IconButton disabled={disabled} onClick={() => selectPlayer(player)}>
            <Add />
          </IconButton>
        )}
      </section>
    </Card>
  );
};

export default PlayerCard;
