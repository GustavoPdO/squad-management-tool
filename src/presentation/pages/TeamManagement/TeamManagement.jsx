import {useState} from 'react';
import validator from 'validator';
import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@material-ui/core';
import GradientButton from '../../components/gradient-button/GradientButton';
import PlayerCard from '../../components/player-card/PlayerCard';
import Tag from '../../components/tag/Tag';
import TextInput from '../../components/text-input/TextInput';
import {useGlobalStyles} from '../../styles/global.styles';
import {useStyles} from './team-management.styles';

const TeamManagement = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tagArray, setTagArray] = useState([]);
  const [website, setWebsite] = useState('');
  const [type, setType] = useState('fantasy');
  const [formation, setFormation] = useState('3-4-3');
  const [showError, setShowError] = useState(false);

  function validateWebSite() {
    return validator.isURL(website) ? false : true;
  }

  function onChangeTag(value) {
    if (value[value.length - 1] === ';') return;
    setTag(value);
  }

  function onAddTag(event) {
    if (
      (event.keyCode === 13 || event.keyCode === 191) &&
      !tagArray.some(item => item === tag)
    ) {
      setTagArray([...tagArray, tag]);
      setTag('');
    }
  }

  function removeTag(value) {
    setTagArray(tagArray.filter(item => item !== value));
  }

  return (
    <main className={classes.container}>
      <Card component="article" elevation={0} className={classes.card}>
        <header className={globalClasses.header}>
          <h1>Create yout team</h1>
        </header>
        <section className={classes.management}>
          <section className={classes.sectionBase}>
            <h2>TEAM INFORMATION</h2>
            <section className={classes.inputSection}>
              <div className={classes.inputSubDivision}>
                <FormControl required error={showError && name === ''}>
                  <FormLabel htmlFor="team-name-input">Team name</FormLabel>
                  <TextInput
                    id="team-name-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description-input">Description</FormLabel>
                  <TextInput
                    multiline
                    rows={10}
                    id="description-input"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </FormControl>
              </div>
              <div className={classes.inputSubDivision}>
                <FormControl required error={showError && validateWebSite()}>
                  <FormLabel htmlFor="team-website-input">
                    Team website
                  </FormLabel>
                  <TextInput
                    id="team-website-input"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Team type</FormLabel>
                  <RadioGroup
                    row
                    name="team type"
                    value={type}
                    onChange={e => setType(e.target.value)}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label="Real"
                      value="real"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Fantasy"
                      value="fantasy"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tags-input">Tags</FormLabel>
                  <TextInput
                    id="tags-input"
                    value={tag}
                    onChange={e => onChangeTag(e.target.value)}
                    onKeyDown={e => onAddTag(e)}
                  />
                </FormControl>
                <section className={classes.tagContainer}>
                  {tagArray.map(item => (
                    <Tag
                      key={item}
                      name={item}
                      onClick={() => removeTag(item)}
                    />
                  ))}
                </section>
              </div>
            </section>
          </section>
          <section className={classes.sectionBase}>
            <h2>CONFIGURE SQUAD</h2>
            <section className={classes.inputSection}>
              <div className={classes.inputSubDivision}>
                <div className={classes.formationSelectionContainer}>
                  <p>Formation *</p>
                  <Select
                    className={classes.select}
                    value={formation}
                    onChange={e => setFormation(e.target.value)}
                    input={<TextInput />}
                  >
                    <MenuItem value={'3-2-2-3'}>3-2-2-3</MenuItem>
                    <MenuItem value={'3-2-3-1'}>3-2-3-1</MenuItem>
                    <MenuItem value={'3-4-3'}>3-4-3</MenuItem>
                    <MenuItem value={'3-5-2'}>3-5-2</MenuItem>
                    <MenuItem value={'4-2-3-1'}>4-2-3-1</MenuItem>
                    <MenuItem value={'4-3-1-1'}>4-3-1-1</MenuItem>
                    <MenuItem value={'4-3-2'}>4-3-2</MenuItem>
                    <MenuItem value={'4-4-2'}>4-4-2</MenuItem>
                    <MenuItem value={'4-5-1'}>4-5-1</MenuItem>
                    <MenuItem value={'5-4-1'}>5-4-1</MenuItem>
                  </Select>
                </div>
                <div className={classes.teamConfig}></div>
                <GradientButton fullWidth>Salvar</GradientButton>
              </div>
              <div className={classes.inputSubDivision}>
                <FormControl>
                  <FormLabel htmlFor="player-search-input">
                    Search Players
                  </FormLabel>
                  <TextInput id="player-search-input" />
                </FormControl>
                <section className={classes.playerList}>
                  <PlayerCard />
                  <PlayerCard />
                  <PlayerCard />
                </section>
              </div>
            </section>
          </section>
        </section>
      </Card>
    </main>
  );
};

export default TeamManagement;
