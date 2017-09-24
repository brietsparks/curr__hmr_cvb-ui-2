import 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

// import { AuthContextProvider } from './state/Auth/context';
import UserInitializer from './components/Auth/UserInitializer';
import { Router, history } from './routing';
import store, { apolloClient } from './store';

export const App = () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
        <UserInitializer>
          <ConnectedRouter history={history}>
            <Router/>
          </ConnectedRouter>
        </UserInitializer>
    </ApolloProvider>
  );
};

export default App;
