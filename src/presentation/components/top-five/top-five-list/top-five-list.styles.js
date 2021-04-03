import {makeStyles} from '@material-ui/core';

const cardHeight = 44;
const cardMargin = 8;

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.main,
    borderRadius: '12px',
    height: `${cardHeight * 5 + cardMargin * 6}px`,
  },
  header: {
    height: '40px',
  },
  listItem: {
    height: `${cardHeight}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `${cardMargin}px`,
    padding: '0 12px',
    '&:hover': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  value: {
    fontWeight: 500,
  },
}));
