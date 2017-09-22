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
    const { user, children, showLogin, logout, currentUrlPath } = this.props;

    // inject props into cloned child components
    const propsForChildren = { showLogin, logout };

    const childrenWithAuthActions = children instanceof Array
      ? children.map(child => React.cloneElement(child, propsForChildren))
      : React.cloneElement(children, propsForChildren);

    //
    return (
      user.initialized
        ? (
          <AuthContextProvider
            userId={user.id}
            userIsAuthenticated={!!user.id}
            userScopes={getUserScopes(user)}
          >
            {childrenWithAuthActions}
          </AuthContextProvider>
        )
        : (
          <p>Loading</p>
        )

    );
  }
}

export default connectToAuthState(AuthContainer);