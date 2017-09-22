import 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

import { Routes, history } from './routing';
import store, { apolloClient } from './store';

export const App = () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </ApolloProvider>
  );
};

export default App;
