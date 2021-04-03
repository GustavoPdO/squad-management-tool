import {Tooltip} from '@material-ui/core';
import {useStyles} from './custom-tooltip.styles';

export const CustomTooltip = props => {
  const classes = useStyles();
  return <Tooltip arrow placement="top" classes={classes} {...props} />;
};
