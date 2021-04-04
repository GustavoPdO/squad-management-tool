import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import {save, load} from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save(), thunk)(createStore);

export default createStoreWithMiddleware(
  rootReducer,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
