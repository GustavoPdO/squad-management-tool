import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#552c8a',
    },
    secondary: {
      main: '#a6397d',
    },
    gradient: {
      horizontal:
        'linear-gradient(90deg, rgba(192,14,78,1) 0%, rgba(139,32,111,1) 67%)',
      vertical:
        'linear-gradient(0deg, rgba(103,47,136,1) 0%, rgba(183,61,125,1) 100%)',
      white:
        'linear-gradient(0deg, rgba(230,230,230,1) 0%, rgba(255,255,255,1) 100%);',
    },
    background: {
      main: '#f7f3f7',
      footer: '#e9e3e9',
    },
  },
  breakpoints: {
    values: {
      tablet: 769,
      mobile: 424,
    },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: '16px',
      },
    },
    MuiInputBase: {
      multiline: {
        padding: '0',
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 600,
        color: 'black',
      },
    },
  },
});
