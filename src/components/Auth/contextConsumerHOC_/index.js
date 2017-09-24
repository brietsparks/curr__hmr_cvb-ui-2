import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withAuthContext = InnerComponent => class WithAuthContext extends Component {

  static contextTypes = {
    userId: PropTypes.string,
    userIsAuthenticated: PropTypes.bool,
    userScopes: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const {
      userId,
      userIsAuthenticated,
      userScopes
    } = this.context;

    return (
      <InnerComponent
        {...this.props}
        userId={userId}
        userIsAuthenticated={userIsAuthenticated}
        userScopes={userScopes}
      />
    )
  }
};

export default withAuthContext;