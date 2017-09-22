import { routerReducer, routerMiddleware } from 'react-router-redux';
import Store from './Store';

import { stateKey as apolloKey } from '../state/Apollo/constants';
import ApolloClient from './ApolloClient';

import { stateKey as routingKey } from '../state/Routing/constants';
import { history } from '../routing';

export const apolloClient = ApolloClient();

export const store = Store({
  initialState: {},
  reducers: {
    [apolloKey]: apolloClient.reducer(),
    [routingKey]: routerReducer,
  },
  configureMiddlewares: middlewares => {
    middlewares.push(apolloClient.middleware());
    middlewares.push(routerMiddleware(history));
  },
});

export default store;