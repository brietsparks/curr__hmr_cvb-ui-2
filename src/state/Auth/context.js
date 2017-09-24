import Context from 'easy-context';

import { stateKey } from './constants';
import authStateShape from './shape';
import * as actions from './actions';

const AuthContext = new Context({
  propTypes: {
    user: authStateShape.user
  },
  mapStateToContext: state => {
    const userState = state[stateKey];

    return {
      user: userState.user
    }
  },
  mapDispatchToPublisherProps: (dispatch) => {
    return {
      showLogin: ({ onSuccessRedirect }) => dispatch(actions.showAuth0({ onSuccessRedirect })),
      login: () => dispatch(actions.login()),
      logout: ({ onSuccessRedirect }) => dispatch(actions.logout({ onSuccessRedirect })),
      initializeUser: () => dispatch(actions.initializeUser()),
    }
  },
});

export const AuthContextProvider = AuthContext.Provider;
export const subscribeToAuthContext = AuthContext.subscriber;
export const publishToAuthContext = AuthContext.publisher;