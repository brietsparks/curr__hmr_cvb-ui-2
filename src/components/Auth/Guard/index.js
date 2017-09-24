import React  from 'react';
import PropTypes from 'prop-types';

import { subscribeToAuthContext } from '../../../state/Auth/context';


const propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
  guestRender: PropTypes.func.isRequired,
};

export const AuthGuard = props => {
  const { user, guestRender, children } = props;

  return !!user.id
    ? <span>{ children }</span>
    : guestRender()
  ;
};

AuthGuard.propTypes = propTypes;

export default subscribeToAuthContext(AuthGuard);
