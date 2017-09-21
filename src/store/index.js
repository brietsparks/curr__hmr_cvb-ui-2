import { routerReducer, routerMiddleware } from 'react-router-redux';

import { stateKey as routingKey } from '../state/Routing/constants';
import { history } from '../routing';

import Store from './Store';

export default Store({
  initialState: {},
  reducers: {
    [routingKey]: routerReducer
  },
  middlewares: [
    routerMiddleware(history)
  ],
});