import Context from 'easy-context';
import PropTypes from 'prop-types';

import { stateKey as authStateKey } from './constants';
import authStateShape from './shape';
import * as actions from './actions';

import { stateKey as routingStateKey } from '../Routing/constants';

const AuthContext = new Context({
  propTypes: {
    user: authStateShape.user,
    currentRoute: PropTypes.string
  },

  mapStateToContext: (state) => {
    const userState = state[authStateKey];
    const routingState = state[routingStateKey];

    // todo: current route is null because it is not updating after router initial location change, see: https://github.com/react-boilerplate/react-boilerplate/issues/1380
    const currentRoute = routingState.location ? routingState.location.pathname : '/home';

    return {
      user: userState.user,
      currentRoute
    }
  },
  mapDispatchToPublisherProps: (dispatch) => {
    return {
      showLogin: ({ onLoginSuccessRoute }) => dispatch(actions.showAuth0({ onLoginSuccessRoute })),
      login: () => dispatch(actions.login()),
      logout: ({ onSuccessRedirect }) => dispatch(actions.logout({ onSuccessRedirect })),
      initializeUser: () => dispatch(actions.initializeUser()),
    }
  },
});


export const AuthContextProvider = AuthContext.Provider;
export const publishToAuthContext = AuthContext.publisher;
export const subscribeToAuthContext = AuthContext.subscriber;