import React, { Component } from 'react';
import createConnector from '../createReduxConnector';

import { stateKey } from './constants';
import * as actions from './actions';

const mapStateToProps = state => {
  return state[stateKey];
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLogin: ({ onSuccessRedirect }) => dispatch(actions.showAuth0({ onSuccessRedirect })),
    login: () => dispatch(actions.login()),
    logout: ({ onSuccessRedirect }) => dispatch(actions.logout({ onSuccessRedirect })),
    initializeUser: () => dispatch(actions.initializeUser()),
  }
};

export default createConnector(mapStateToProps, mapDispatchToProps);

export const connectToAuthState = createConnector(mapStateToProps, dispatch => ({}));
export const connectToAuthActions = createConnector(state => ({}), mapDispatchToProps);
