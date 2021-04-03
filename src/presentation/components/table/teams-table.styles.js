import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: '747px',
    padding: '0 12px',
  },
  name: {
    width: '20%',
  },
  description: {
    width: 'auto',
  },
  actions: {
    minWidth: '114px',
    textAlign: 'end',
  },
  row: {
    height: '52px',
    '& svg': {
      fontSize: '1.2rem',
    },
    '& button': {
      padding: '0 4px',
    },
    '&:hover': {
      backgroundColor: theme.palette.background.main,
    },
    '&:hover td, &:hover button': {
      color: theme.palette.secondary.main,
    },
    '&:not(:hover) button': {
      visibility: 'hidden',
    },
  },
}));
