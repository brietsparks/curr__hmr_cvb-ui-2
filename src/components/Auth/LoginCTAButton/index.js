import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { subscribeToAuthContext, publishToAuthContext } from '../../../state/Auth/context';

const propTypes = {
  showLogin: PropTypes.func.isRequired,
  currentRoute: PropTypes.string
};

export const LoginCTAButton = ({ showLogin, currentRoute }) => {
  return (
    <div>
      <p>Redirect: {currentRoute}</p>
      <button onClick={ () => { console.log(currentRoute) } }>Current Route</button>
      <button onClick={ () => showLogin({ onLoginSuccessRoute: currentRoute }) }>Login</button>
    </div>
  );
};

LoginCTAButton.propTypes = propTypes;

export default compose(
  publishToAuthContext,
  subscribeToAuthContext
)(LoginCTAButton);