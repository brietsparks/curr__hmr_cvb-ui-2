import React from 'react';
import PropTypes from 'prop-types';

import { publishToAuthContext } from '../../../state/Auth/context';

const propTypes = {
  showLogin: PropTypes.func.isRequired,
  onLoginSuccessRoute: PropTypes.string.isRequired,
};

export const LoginCTAButton = ({ showLogin, onLoginSuccessRoute }) => {
  return (
    <div>
      <p>Redirect: {onLoginSuccessRoute}</p>
      <button onClick={ () => showLogin({ onLoginSuccessRoute }) }>Login</button>
    </div>
  );
};

LoginCTAButton.propTypes = propTypes;

export default publishToAuthContext(LoginCTAButton);