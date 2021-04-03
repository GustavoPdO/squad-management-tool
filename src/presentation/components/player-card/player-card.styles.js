import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.gradient.white,
    borderRadius: 0,
    border: '1px dashed grey',
    padding: '8px',
    margin: '4px 0',
    '& p': {
      color: theme.palette.secondary.main,
      fontWeight: 600,
      '& strong': {
        color: 'black',
      },
    },
  },
  nameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
}));
