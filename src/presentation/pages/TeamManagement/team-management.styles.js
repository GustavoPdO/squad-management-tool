import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.main,
    minHeight: 'calc(100vh - 88px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '100%',
    margin: '32px',
    padding: '16px',
  },
  management: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      fontSize: '1.2rem',
      color: 'grey',
    },
  },
  sectionBase: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '28px',
  },
  inputSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '& label': {
      marginTop: '16px',
    },
  },
  inputSubDivision: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formationSelectionContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    '& p': {
      marginRight: '16px',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.00938em',
    },
  },
  select: {
    width: '150px',
  },

  playerList: {
    maxHeight: '576px',
    overflowY: 'scroll',
  },
}));
