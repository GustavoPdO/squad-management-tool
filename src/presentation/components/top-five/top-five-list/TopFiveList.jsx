import {Card} from '@material-ui/core';
import {useStyles} from './top-five-list.styles';

const info = [
  {label: 'Inter Milan', value: 31.9},
  {label: 'APOEL Nicosia', value: 31.7},
  {label: 'AC Milan', value: 31.6},
  {label: 'Besiktas JK', value: 31.4},
  {label: 'Olympiacos Piraeus', value: 31.3},
];

const TopFiveList = ({header}) => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <h1>{header}</h1>
      </header>
      <section className={classes.container}>
        <ol>
          {info.map(item => (
            <Card
              component="li"
              elevation={0}
              className={classes.listItem}
              key={item.label}
            >
              <p>{item.label}</p>
              <p className={classes.value}>{item.value}</p>
            </Card>
          ))}
        </ol>
      </section>
    </>
  );
};

export default TopFiveList;
