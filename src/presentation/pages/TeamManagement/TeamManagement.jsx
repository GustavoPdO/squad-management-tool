import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import {FiberManualRecord, FiberManualRecordOutlined} from '@material-ui/icons';
import GradientButton from '../../components/gradient-button/GradientButton';
import {PlayerCard} from '../../components/player-card/PlayerCard';
import TextInput from '../../components/TextInput/TextInput';
import {useGlobalStyles} from '../../styles/global.styles';
import {useStyles} from './team-management.styles';

const TeamManagement = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

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
                <FormControl>
                  <FormLabel htmlFor="team-name-input">Team name</FormLabel>
                  <TextInput
                    defaultValue="Insert team name"
                    id="team-name-input"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description-input">Description</FormLabel>
                  <TextInput multiline rows={10} id="description-input" />
                </FormControl>
              </div>
              <div className={classes.inputSubDivision}>
                <FormControl>
                  <FormLabel htmlFor="team-website-input">
                    Team website
                  </FormLabel>
                  <TextInput
                    defaultValue="http://myteam.com"
                    id="team-website-input"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Team type</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<FiberManualRecordOutlined />}
                          checkedIcon={<FiberManualRecord />}
                          name="type"
                        />
                      }
                      label="Real"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<FiberManualRecordOutlined />}
                          checkedIcon={<FiberManualRecord />}
                          name="type"
                        />
                      }
                      label="Fantasy"
                    />
                  </FormGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tags-input">Tags</FormLabel>
                  <TextInput multiline rows={6} id="tags-input" />
                </FormControl>
              </div>
            </section>
          </section>
          <section className={classes.sectionBase}>
            <h2>CONFIGURE SQUAD</h2>
            <section className={classes.inputSection}>
              <div className={classes.inputSubDivision}>
                <div className={classes.formationSelectionContainer}>
                  <p>Formation</p>
                  <Select value={'3-4-3'} input={<TextInput />}>
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
                  <TextInput
                    defaultValue="http://myteam.com"
                    id="player-search-input"
                  />
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
