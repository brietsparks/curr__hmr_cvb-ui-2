import React, { Component } from 'react';
import withAuthContext from '../contextConsumerHOC';


export class AuthGuard extends Component {

  render() {
    const { userIsAuthenticated, guestRender } = this.props;

    return userIsAuthenticated
      ? <span>{ this.props.children }</span>
      : guestRender()
    ;
  }
}

export default withAuthContext(AuthGuard);