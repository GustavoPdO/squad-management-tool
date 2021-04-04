import {InputBase} from '@material-ui/core';
import {useStyles} from './text-input.styles';

const TextInput = props => {
  const classes = useStyles();

  return <InputBase classes={classes} {...props} />;
};

export default TextInput;
