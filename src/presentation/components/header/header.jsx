import {useStyles} from './header.styles';
import {Button} from '@material-ui/core';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.navbar}>
      <section>
        <img src={'/assets/logo-new.svg'} alt="venturus logo" />
        <h1>Squad Management Tool</h1>
      </section>
      <section>
        <p>Gustavo Pedralino</p>
        <Button variant="contained">GP</Button>
      </section>
    </header>
  );
};

export default Header;
