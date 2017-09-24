import React from 'react';
import PropTypes from 'prop-types';

import { publishToAuthContext } from '../../../state/Auth/context';

const propTypes = {
  showLogin: PropTypes.func.isRequired
};

export const LoginCTAButton = ({ showLogin, onSuccessRedirect }) => {
  onSuccessRedirect = onSuccessRedirect || '/';
  return (
    <div>
      <button onClick={ () => showLogin({ onSuccessRedirect }) }>Login</button>
    </div>
  );
};

LoginCTAButton.propTypes = propTypes;

export default publishToAuthContext(LoginCTAButton);