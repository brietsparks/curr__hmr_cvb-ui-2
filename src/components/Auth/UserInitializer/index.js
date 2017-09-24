import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { subscribeToAuthContext, publishToAuthContext } from '../../../state/Auth/context';

export class UserInitializer extends Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string
    }),
    initializeUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    if (!this.props.user.id) {
      this.props.initializeUser();
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default compose(
  subscribeToAuthContext,
  publishToAuthContext
)(UserInitializer);


