import {Button} from '@material-ui/core';
import {useStyles} from './tag.styles';

const Tag = ({name, onClick}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p>{name}</p>
      <Button disableRipple className={classes.button} onClick={onClick}>
        x
      </Button>
    </div>
  );
};

export default Tag;
