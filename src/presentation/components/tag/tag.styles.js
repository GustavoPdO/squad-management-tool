import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    margin: '4px 8px',
    borderRadius: '12px',
    color: 'white',
    '& p': {
      lineHeight: 1,
    },
  },
  button: {
    color: 'white',
    padding: '0',
    minWidth: '20px',
  },
}));
