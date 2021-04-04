import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';

import store from './redux/store';

import Footer from './presentation/components/footer/footer';
import Header from './presentation/components/header/header';
import Home from './presentation/pages/Home/Home';
import TeamManagement from './presentation/pages/TeamManagement/TeamManagement';

import {theme} from './presentation/styles/theme';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
