import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '@material-ui/core';
import TopFiveList from './top-five-list/TopFiveList';
import {useGlobalStyles} from '../../styles/global.styles';
import {useStyles} from './top-five.styles';
import {calculateTopFive} from '../../../redux/actions/teams';

const TopFive = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const dispatch = useDispatch();
  const lessAvgAgeList = useSelector(state => state.teams.lowestAvgAgeList);
  const highestAvgAgeList = useSelector(state => state.teams.highestAvgAgeList);

  useEffect(() => {
    dispatch(calculateTopFive());
  }, [dispatch]);

  return (
    <Card elevation={0} component="section" className={classes.container}>
      <header className={globalClasses.header}>
        <h1>Top 5</h1>
      </header>
      <section className={classes.content}>
        <section className={classes.column}>
          <TopFiveList header={'Highest avg age'} list={highestAvgAgeList} />
        </section>
        <section className={classes.column}>
          <TopFiveList header={'Lowest avg age'} list={lessAvgAgeList} />
        </section>
      </section>
    </Card>
  );
};

export default TopFive;
