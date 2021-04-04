import {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import CustomTableRow from './table-row/CustomTableRow';
import {useStyles} from './teams-table.styles';

const columns = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 200,
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'actions',
    label: '',
    width: 80,
  },
];

const TeamsTable = () => {
  const classes = useStyles();

  const teams = useSelector(state => state.teams.teams);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const rows = useMemo(() => {
    let sortedRows = [...teams];
    if (orderBy !== null) {
      sortedRows.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return order === 'asc' ? -1 : 1;
        } else if (a[orderBy] > b[orderBy]) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedRows;
  }, [order, orderBy, teams]);

  function sortUpdate(e) {
    if (orderBy === e) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setOrderBy(e);
    }
  }

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
                className={classes[column.id]}
              >
                {column.id !== 'actions' ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={() => sortUpdate(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <CustomTableRow key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamsTable;
