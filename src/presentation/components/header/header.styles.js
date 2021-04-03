import {makeStyles} from '@material-ui/core';

const diameter = '48px';

export const useStyles = makeStyles(theme => ({
  navbar: {
    background: theme.palette.gradient.horizontal,
    height: '56px',
    padding: '0 28px',
    [theme.breakpoints.up('tablet')]: {
      padding: '0 20px',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& section': {
      display: 'flex',
      alignItems: 'center',
    },
    '& img': {
      height: diameter,
      width: 'auto',
    },
    '& h1': {
      display: 'none',
      [theme.breakpoints.up(theme.breakpoints.values.tablet - 1)]: {
        display: 'block',
      },
      marginLeft: '16px',
      color: 'white',
      fontSize: '1.6rem',
    },
    '& p': {
      display: 'none',
      [theme.breakpoints.up(theme.breakpoints.values.tablet - 1)]: {
        display: 'block',
      },
      marginRight: '16px',
      color: 'white',
    },
    '& button': {
      height: diameter,
      width: diameter,
      minWidth: diameter,
      border: '1px solid #000',
      borderRadius: '50%',
      fontSize: '1.4rem',
      fontWeigth: '500',
    },
  },
}));
