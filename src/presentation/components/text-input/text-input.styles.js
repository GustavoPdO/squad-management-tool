import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    position: 'relative',
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  error: {
    border: '1px solid red',
    borderRadius: 4,
  },
}));
