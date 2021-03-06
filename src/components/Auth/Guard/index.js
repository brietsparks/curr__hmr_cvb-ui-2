import React  from 'react';
import PropTypes from 'prop-types';

import connectToAuthStore from '../../../state/Auth/connector';

const propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
  guestRender: PropTypes.func.isRequired,
};

export const AuthGuard = props => {
  const { user, guestRender, children } = props;

  return !!user.id
    ? <div>{ children }</div>
    : guestRender()
  ;
};

AuthGuard.propTypes = propTypes;

export default connectToAuthStore(AuthGuard);
