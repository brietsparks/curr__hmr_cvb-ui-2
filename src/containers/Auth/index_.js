import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getUserScopes, checkUserIsAuthenticated } from './selectors';
import AuthContextProvider from '../../components/Auth/ContextProvider';
import connectToAuthState from '../../state/Auth/connector';


export class AuthContainer extends Component {

  // static propTypes = {
  //   // currentUrlPath: PropTypes.string.isRequired,
  //
  //   showLogin: PropTypes.func.isRequired,
  //   logout: PropTypes.func.isRequired,
  //   initializeUser: PropTypes.func.isRequired,
  // };

  componentDidMount() {
    if (!this.props.user.initialized) {
      console.log(this.props);
      this.props.initializeUser();
    }
  }

  render() {
    const { user, children, currentUrlPath } = this.props;


    // todo: should showLogin, logout be part of context?
    return (
      user.initialized
        ? (
          <AuthContextProvider
            userId={user.id}
            userIsAuthenticated={!!user.id}
            userScopes={getUserScopes(user)}
          >
            {children}
          </AuthContextProvider>
        )
        : <p>Loading</p>

    );
  }
}

export default connectToAuthState(AuthContainer);