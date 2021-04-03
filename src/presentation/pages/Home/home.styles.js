import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.main,
    minHeight: 'calc(100vh - 88px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  content: {
    width: '95%',
    [theme.breakpoints.up('tablet')]: {
      width: 'calc(50% - 32px)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '32px 0 0',
  },
}));
