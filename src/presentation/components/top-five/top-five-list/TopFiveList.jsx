import {Card} from '@material-ui/core';
import {useStyles} from './top-five-list.styles';

const TopFiveList = ({header, list, ...props}) => {
  const classes = useStyles({list, ...props});

  return (
    <>
      <header className={classes.header}>
        <h1>{header}</h1>
      </header>
      <section className={classes.container}>
        <ol>
          {list.map(item => (
            <Card
              component="li"
              elevation={0}
              className={classes.listItem}
              key={item.name}
            >
              <p>{item.name}</p>
              <p className={classes.value}>{item.avgAge}</p>
            </Card>
          ))}
        </ol>
      </section>
    </>
  );
};

export default TopFiveList;
