import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AuthContextProvider extends Component {

  static childContextTypes = {
    userId: PropTypes.string,
    userIsAuthenticated: PropTypes.bool,
    userScopes: PropTypes.arrayOf(PropTypes.string)
  };

  getChildContext() {
    const {
      userId,
      userIsAuthenticated,
      userScopes
    } = this.props;

    return {
      userId,
      userIsAuthenticated,
      userScopes
    };
  }

  render() {
    return (
      <span>
        {this.props.children}
      </span>
    );
  }

};