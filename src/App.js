import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';

import Footer from './presentation/components/footer/footer';
import Header from './presentation/components/header/header';
import Home from './presentation/pages/Home/Home';
import TeamManagement from './presentation/pages/TeamManagement/TeamManagement';

import {theme} from './presentation/styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team-management" component={TeamManagement} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
