import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  footer: {
    zIndex: 1,
    backgroundColor: theme.palette.background.footer,
    height: '32px',
    width: '100%',
    display: 'flex',
    '& p': {
      margin: 'auto',
      fontSize: '0.8rem',
    },
  },
}));
