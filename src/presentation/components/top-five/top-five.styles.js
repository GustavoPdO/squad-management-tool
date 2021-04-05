import {makeStyles} from '@material-ui/core';

const padding = 20;

export const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'strech',
  },
  content: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${padding}px`,
  },
  column: {
    height: '100%',
    width: `calc(50% - ${padding / 2}px)`,
    display: 'flex',
    flexDirection: 'column',
  },
}));
