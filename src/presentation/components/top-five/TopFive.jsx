import {Card} from '@material-ui/core';
import TopFiveList from './top-five-list/TopFiveList';
import {useGlobalStyles} from '../../styles/global.styles';
import {useStyles} from './top-five.styles';

const TopFive = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <Card elevation={0} component="section" className={classes.container}>
      <header className={globalClasses.header}>
        <h1>Top 5</h1>
      </header>
      <section className={classes.content}>
        <section className={classes.column}>
          <TopFiveList header={'Highest avg age'} />
        </section>
        <section className={classes.column}>
          <TopFiveList header={'Lowest avg age'} />
        </section>
      </section>
    </Card>
  );
};

export default TopFive;
