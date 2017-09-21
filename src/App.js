import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';

import { Routes, history } from './routing';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
