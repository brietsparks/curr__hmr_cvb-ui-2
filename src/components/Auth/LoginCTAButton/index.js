import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  showLogin: PropTypes.func.isRequired
};

export const LoginCTAButton = ({ showLogin }) => (
  <div>
    <button onClick={ () => showLogin() }>Login</button>
  </div>
);

LoginCTAButton.propTypes = propTypes;

export default LoginCTAButton;