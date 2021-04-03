import {IconButton, TableCell, TableRow} from '@material-ui/core';
import {Delete, Edit, Share} from '@material-ui/icons';
import {CustomTooltip} from '../../tooltip/CustomTooltip';
import {useStyles} from '../teams-table.styles';

const CustomTableRow = ({row, index}) => {
  const classes = useStyles();

  return (
    <TableRow hover key={index} className={classes.row}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell className={classes.actions}>
        <CustomTooltip title="Excluir">
          <IconButton>
            <Delete />
          </IconButton>
        </CustomTooltip>
        <CustomTooltip title="Compartilhar">
          <IconButton>
            <Share />
          </IconButton>
        </CustomTooltip>
        <CustomTooltip title="Edit">
          <IconButton>
            <Edit name="Edit" />
          </IconButton>
        </CustomTooltip>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
