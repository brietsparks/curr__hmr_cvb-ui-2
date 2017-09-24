import createStoreConnector from '../createReduxConnector';

import * as actions from './actions';
import { stateKey as authStateKey } from './constants';
import { stateKey as routingStateKey } from '../Routing/constants';

const mapStateToProps = state => {
  const userState = state[authStateKey];
  const routingState = state[routingStateKey];

  const currentRoute = routingState.location ? routingState.location.pathname : '/home';

  return {
    user: userState.user,
    currentRoute
  }
};

const mapDispatchToProps = dispatch => ({
  showLogin: ({ onLoginSuccessRoute }) => dispatch(actions.showAuth0({ onLoginSuccessRoute })),
  login: () => dispatch(actions.login()),
  logout: ({ onSuccessRedirect }) => dispatch(actions.logout({ onSuccessRedirect })),
  initializeUser: () => dispatch(actions.initializeUser()),
});

export default createStoreConnector(mapStateToProps, mapDispatchToProps);