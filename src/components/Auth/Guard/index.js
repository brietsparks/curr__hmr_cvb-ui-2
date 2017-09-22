import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withAuthContext from '../contextConsumerHOC';


export class AuthGuard extends Component {

  static propTypes = {
    userIsAuthenticated: PropTypes.bool,
    guestRender: PropTypes.func.isRequired,
  };

  render() {
    const { userIsAuthenticated, guestRender } = this.props;

    return userIsAuthenticated
      ? <span>{ this.props.children }</span>
      : guestRender()
    ;
  }
}

export default withAuthContext(AuthGuard);