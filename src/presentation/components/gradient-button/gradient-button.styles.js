import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  button: {
    background: theme.palette.gradient.vertical,
    height: '32px',
    width: props => (props.fullWidth ? '100%' : '32px'),
    minWidth: '32px',
    color: 'white',
    boxShadow: `0px 2px 2px 2px rgba(255,215,249, .6)`,

    '&:hover, &:focus, &:active': {
      boxShadow: `0px 4px 2px 4px rgba(255,215,249, 1)`,
    },
  },
}));
