import {Card} from '@material-ui/core';
import {useStyles} from './most-less-picked-player.styles';

const MostLessPickedPlayer = () => {
  const classes = useStyles();
  return (
    <Card component="section" elevation={0} className={classes.container}>
      <section className={classes.playerContainer}>
        <header className={classes.header}>
          <h1>Most picked player</h1>
        </header>
        <div className={classes.playerContent}>
          <div className={classes.playerInitials}>
            <p>GP</p>
          </div>
          <div className={classes.percentageContainer}>
            <p>75%</p>
          </div>
        </div>
      </section>
      <section className={classes.playerContainer}>
        <header className={classes.header}>
          <h1>Less picked player</h1>
        </header>
        <div className={classes.playerContent}>
          <div className={classes.playerInitials}>
            <p>GP</p>
          </div>
          <div className={classes.percentageContainer}>
            <p>25%</p>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default MostLessPickedPlayer;
