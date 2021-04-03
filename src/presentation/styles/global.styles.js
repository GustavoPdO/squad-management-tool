import {makeStyles} from '@material-ui/core';

export const useGlobalStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    padding: '0 16px',
    borderBottom: '1px solid #eee',
    '& h1': {
      color: theme.palette.primary.main,
    },
  },
}));
