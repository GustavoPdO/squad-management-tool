import {useMemo, useState} from 'react';
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

const teams = [
  {name: 'Barcelona', description: 'a'},
  {name: 'Real Madrid', description: 'b'},
  {name: 'Milan', description: 'c'},
  {name: 'Liverpool', description: 'd'},
  {name: 'Barcelona', description: 'e'},
  {name: 'Barcelona', description: 'f'},
  {name: 'Real Madrid', description: 'g'},
  {name: 'Milan', description: 'h'},
  {name: 'Liverpool', description: 'i'},
  {name: 'Barcelona', description: 'j'},
  {name: 'Barcelona', description: 'k'},
  {
    name: 'Real Madrid',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis est ac ipsum pellentesque, sed dictum velit posuere. Ut tempus libero nunc, tempus consectetur neque maximus sed.',
  },
  {name: 'Milan', description: 'm'},
  {name: 'Liverpool', description: 'n'},
  {name: 'Barcelona', description: 'o'},
  {name: 'Barcelona', description: 'p'},
  {name: 'Real Madrid', description: 'q'},
  {name: 'Milan', description: 'r'},
  {name: 'Liverpool', description: 's'},
  {name: 'Barcelona', description: 't'},
  {name: 'Barcelona', description: 'u'},
];

const TeamsTable = () => {
  const classes = useStyles();

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
  }, [order, orderBy]);

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
            <CustomTableRow row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamsTable;
