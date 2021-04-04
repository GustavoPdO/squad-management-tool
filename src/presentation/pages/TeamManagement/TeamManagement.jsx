import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
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

import {
  addTeam,
  resetActiveTeam,
  updateTeam,
} from '../../../redux/actions/teams';
import TeamFormation from '../../components/team-formation/TeamFormation';

const availablePlayers = [
  {name: 'Cristiano Ronaldo', age: '32', nacionality: 'Portugal'},
  {name: 'Ronaldo Luiz de Alves', age: '28', nacionality: 'Brazil'},
  {name: 'Ronaldo da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Gustavo da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Guilherme da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Gugu da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Augusto da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Gilberto da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Rafael da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Antonio da Silva de Souza', age: '18', nacionality: 'Brazil'},
  {name: 'Alcides da Silva de Souza', age: '18', nacionality: 'Brazil'},
];

const TeamManagement = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  //When there's an active team on state the application gets it and fill the component state
  const editingTeam = useSelector(state => state.teams.activeTeam);

  const [name, setName] = useState(editingTeam ? editingTeam.name : '');
  const [description, setDescription] = useState(
    editingTeam ? editingTeam.description : '',
  );
  const [tag, setTag] = useState('');
  const [tagArray, setTagArray] = useState(
    editingTeam ? editingTeam.tagArray : [],
  );
  const [website, setWebsite] = useState(
    editingTeam ? editingTeam.website : '',
  );
  const [type, setType] = useState(editingTeam ? editingTeam.type : 'fantasy');
  const [formation, setFormation] = useState(
    editingTeam ? editingTeam.formation : '3-4-3',
  );
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showError, setShowError] = useState(false);

  function validateWebSite() {
    return validator.isURL(website) ? false : true;
  }

  function validateName() {
    return name === '';
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

  function onChangeFormation(event) {
    setSelectedPlayers([]);
    setFormation(event.target.value);
  }

  function onAddPlayer(player) {
    const isPlayerAlreadyselected = selectedPlayers.some(
      item => item.name === player.name,
    );
    const teamSize = formation
      .split('-')
      .map(number => +number)
      .reduce((total, item) => total + item);
    if (isPlayerAlreadyselected || selectedPlayers.length >= teamSize) {
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
  }

  function onRemovePlayer(player) {
    setSelectedPlayers(
      selectedPlayers.filter(item => item.name !== player.name),
    );
  }

  function onSaveTeam() {
    //after clicking save button the form error will trigger if necessary
    setShowError(true);
    if (validateName() || validateWebSite()) return;

    const team = {
      name,
      description,
      tagArray,
      website,
      type,
      formation,
    };

    if (editingTeam) {
      team.id = editingTeam.id;
      dispatch(updateTeam(team));
    } else {
      dispatch(addTeam(team));
    }
    history.push('/');
  }

  useEffect(() => {
    //When this component is unmounted the active team will be resetted
    return () => dispatch(resetActiveTeam());
  }, [dispatch]);

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
                <FormControl required error={showError && validateName()}>
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
                    onChange={onChangeFormation}
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
                <TeamFormation
                  formation={formation}
                  players={selectedPlayers}
                  removePlayer={onRemovePlayer}
                />
                <GradientButton fullWidth onClick={onSaveTeam}>
                  Salvar
                </GradientButton>
              </div>
              <div className={classes.inputSubDivision}>
                <FormControl>
                  <FormLabel htmlFor="player-search-input">
                    Search Players
                  </FormLabel>
                  <TextInput id="player-search-input" />
                </FormControl>
                <section className={classes.playerList}>
                  {availablePlayers.map(player => (
                    <PlayerCard
                      key={player.name}
                      player={player}
                      selectPlayer={onAddPlayer}
                      disabled={
                        selectedPlayers.findIndex(
                          selected => selected.name === player.name,
                        ) !== -1
                      }
                    />
                  ))}
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
