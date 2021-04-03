import {useStyles} from './footer.styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>2020 - All rights reserved</p>
    </footer>
  );
};

export default Footer;
