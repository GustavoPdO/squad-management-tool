import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {IconButton, TableCell, TableRow} from '@material-ui/core';
import {Delete, Edit, Share} from '@material-ui/icons';
import {CustomTooltip} from '../../tooltip/CustomTooltip';
import {useStyles} from '../teams-table.styles';
import {deleteTeam, editTeam} from '../../../../redux/actions/teams';

const CustomTableRow = ({row}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  function onDeleteTeam() {
    dispatch(deleteTeam(row.id));
  }

  function onEditTeam() {
    dispatch(editTeam(row));
    history.push('/team-management');
  }

  return (
    <TableRow hover className={classes.row}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell className={classes.actions}>
        <CustomTooltip title="Excluir">
          <IconButton onClick={onDeleteTeam}>
            <Delete />
          </IconButton>
        </CustomTooltip>
        <CustomTooltip title="Compartilhar">
          <IconButton>
            <Share />
          </IconButton>
        </CustomTooltip>
        <CustomTooltip title="Edit">
          <IconButton onClick={onEditTeam}>
            <Edit name="Edit" />
          </IconButton>
        </CustomTooltip>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
