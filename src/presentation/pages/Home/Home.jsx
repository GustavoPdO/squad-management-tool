import MostLessPickedPlayer from '../../components/most-less-picked-player/MostLessPickedPlayer';
import MyTeams from '../../components/my-teams/MyTeams';
import TopFive from '../../components/top-five/TopFive';
import {useStyles} from './home.styles';

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <MyTeams />
      <aside className={classes.content}>
        <TopFive />
        <MostLessPickedPlayer />
      </aside>
    </main>
  );
};

export default Home;
