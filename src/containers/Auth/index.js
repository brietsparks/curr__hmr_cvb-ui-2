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
      this.props.initializeUser();
    }
  }

  render() {
    const { user, children, showLogin, logout, currentUrlPath } = this.props;

    // inject props into cloned child components
    const propsForChildren = { showLogin, logout };

    const childrenWithAuthActions = children instanceof Array
      ? children.map(child => React.cloneElement(child, propsForChildren))
      : React.cloneElement(children, propsForChildren);

    //
    return (
      <AuthContextProvider
        userIsAuthenticated={checkUserIsAuthenticated(user)}
        userScopes={getUserScopes(user)}
      >
        {childrenWithAuthActions}
      </AuthContextProvider>
    );
  }
}

export default connectToAuthState(AuthContainer);