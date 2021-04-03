import {Card} from '@material-ui/core';
import GradientButton from '../gradient-button/GradientButton';
import TeamsTable from '../table/TeamsTable';
import {useGlobalStyles} from '../../styles/global.styles';
import {useStyles} from './my-teams.styles';
import {Add} from '@material-ui/icons';

const MyTeams = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  return (
    <Card component="article" elevation={0} className={classes.container}>
      <header className={globalClasses.header}>
        <h1>My teams</h1>
        <GradientButton>
          <Add />
        </GradientButton>
      </header>
      <TeamsTable />
    </Card>
  );
};

export default MyTeams;
