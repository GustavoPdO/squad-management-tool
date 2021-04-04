import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

import {save, load} from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export default createStoreWithMiddleware(
  rootReducer,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
