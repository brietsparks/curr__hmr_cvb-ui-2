import React, { Component } from 'react';
import { connect } from 'react-redux';

import { stateKey } from './constants';
import * as actions from './actions';

const mapStateToProps = state => {
  // the auth state from the root state
  return state[stateKey];
};

const mapDispatchToProps = dispatch => {
  return {
    showLogin: ({ onSuccessRedirect }) => dispatch(actions.showAuth0({ onSuccessRedirect })),
    login: () => dispatch(actions.login()),
    logout: ({ onSuccessRedirect }) => dispatch(actions.logout({ onSuccessRedirect })),
    initializeUser: () => dispatch(actions.initializeUser()),
  }
};

export default (InnerComponent) => {

  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(InnerComponent);

  return class ConnectedToAuthState extends Component {
    render() {
      return (
        <ConnectedComponent {...this.props} />
      );
    }
  };
};
