import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
    width: '95%',
    [theme.breakpoints.up('tablet')]: {
      width: 'calc(50% - 32px)',
    },
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    margin: '32px 0 0',
  },
}));
