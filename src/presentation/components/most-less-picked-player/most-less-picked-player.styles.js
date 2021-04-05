import {makeStyles} from '@material-ui/core';

const minDiameter = 80;
const maxDiameter = 140;

export const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    minHeight: '250px',
    maxHeight: '300px',
    width: '100%',
    background: theme.palette.gradient.vertical,
    display: 'flex',
    marginTop: '32px',
    color: 'white',
    '& section:last-of-type': {
      borderLeft: '1px solid white',
    },
  },
  playerContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  header: {
    height: '100%',
    maxHeight: '96px',
    marginBottom: '20px',
    '& h1': {
      fontSize: '1.6rem',
    },
  },
  playerContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  playerInitials: {
    backgroundColor: theme.palette.background.main,
    color: 'black',
    height: '100%',
    minHeight: `${minDiameter}px`,
    maxHeight: `${maxDiameter}px`,
    width: '100%',
    minWidth: `${minDiameter}px`,
    maxWidth: `${maxDiameter}px`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      fontSize: '3rem',
      color: theme.palette.primary.main,
    },
  },
  percentageContainer: {
    width: '50px',
    height: '100%',
    minHeight: `${minDiameter}px`,
    maxHeight: `${maxDiameter}px`,
    '& p': {
      borderBottom: '1px solid white',
    },
  },
  noTeamContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  noTeamMessage: {
    fontSize: '1.4rem',
  },
}));
