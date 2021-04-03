import {Button} from '@material-ui/core';

import {useStyles} from './gradient-button.styles';

const GradientButton = ({fullWidth = false, ...props}) => {
  const classes = useStyles({...props, fullWidth});
  return (
    <Button variant="contained" className={classes.button}>
      {props.children}
    </Button>
  );
};

export default GradientButton;
