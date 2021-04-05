import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '@material-ui/core';
import {useStyles} from './most-less-picked-player.styles';
import {CustomTooltip} from '../tooltip/CustomTooltip';
import {getMostLessPickedPlayer} from '../../../redux/actions/teams';

const MostLessPickedPlayer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const mostPickedPlayer = useSelector(state => state.teams.mostPickedPlayer);
  const lessPickedPlayer = useSelector(state => state.teams.lessPickedPlayer);

  function showInitials(name) {
    let names = name.split(' ');
    let initials = names[0].slice(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].slice(0, 1).toUpperCase();
    }
    return initials;
  }

  useEffect(() => {
    dispatch(getMostLessPickedPlayer());
  }, [dispatch]);

  return (
    <Card component="section" elevation={0} className={classes.container}>
      <section className={classes.playerContainer}>
        <header className={classes.header}>
          <h1>Most picked player</h1>
        </header>
        <div className={classes.playerContent}>
          <div className={classes.playerInitials}>
            <CustomTooltip title={mostPickedPlayer.display_name}>
              <p>{showInitials(mostPickedPlayer.display_name)}</p>
            </CustomTooltip>
          </div>
          <div className={classes.percentageContainer}>
            <p>{mostPickedPlayer.pickingRatio.toFixed(2)}%</p>
          </div>
        </div>
      </section>
      <section className={classes.playerContainer}>
        <header className={classes.header}>
          <h1>Less picked player</h1>
        </header>
        <div className={classes.playerContent}>
          <div className={classes.playerInitials}>
            <CustomTooltip title={lessPickedPlayer.display_name}>
              <p>{showInitials(lessPickedPlayer.display_name)}</p>
            </CustomTooltip>
          </div>
          <div className={classes.percentageContainer}>
            <p>{lessPickedPlayer.pickingRatio.toFixed(2)}%</p>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default MostLessPickedPlayer;
