import 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserInitializer from './components/Auth/UserInitializer';
import { Router, history } from './routing';
import store, { apolloClient } from './store';

export const App = () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <MuiThemeProvider>
        <UserInitializer>
          <ConnectedRouter history={history}>
            <Router/>
          </ConnectedRouter>
        </UserInitializer>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default App;
