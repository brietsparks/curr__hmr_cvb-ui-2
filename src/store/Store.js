import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import { reducers as stateReducers } from '../state';
import middlewares from '../middleware/redux';

const initStore = ({
  initialState = {},
  reducers = {},
  configureMiddlewares = mw => mw
}) => {

  Object.assign(reducers, stateReducers);

  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(
      applyMiddleware.apply(this, configureMiddlewares(middlewares))
    )
  );
};

export default initStore;