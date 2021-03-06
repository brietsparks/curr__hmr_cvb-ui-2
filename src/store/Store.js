import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import { reducers as stateReducers } from '../state';
import middlewares from '../middleware/redux';

const initStore = ({
  initialState = {},
  reducers = {},
  configureMiddlewares
}) => {

  Object.assign(reducers, stateReducers);

  // todo: still not able to easily manipulate middlewares array from calling location
  configureMiddlewares(middlewares);

  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(
      applyMiddleware.apply(this, middlewares)
    )
  );
};

export default initStore;