import 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

import { AuthContextProvider } from './state/Auth/context';
import { Router, history } from './routing';
import store, { apolloClient } from './store';

export const App = () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <AuthContextProvider>
        <ConnectedRouter history={history}>
          <Router history={history}/>
        </ConnectedRouter>
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default App;
