import decode from 'jwt-decode';

// auth0
import { webAuth } from '../../auth0';

// state
import { actions } from './constants';

// redirect
import { onLoginSuccessRouteKey } from '../../pages/Auth0Callback/constants';

// storage
import { getAccessToken } from '../../browserStorage';


const accessTokenKey = 'access_token';


export const setUser = ({ id, scope, initialized }) => {
  return {
    type: actions.user.SET.DEFAULT,
    payload: { id, scope, initialized }
  }
};

export const initializeUser = (accessToken = null) => {
  return dispatch => {
    const accessToken = accessToken || localStorage.getItem(accessTokenKey);

    const decoded = accessToken ? decode(accessToken) : null;

    const id = decoded ? decoded.sub : null;
    const initialized = true;

    dispatch(setUser({
      id,
      // scope: decoded.scope,
      initialized
    }));
  };
};

export const showAuth0 = ({ onLoginSuccessRoute }) => {
  if (!onLoginSuccessRoute) {
    throw Error('showAuth0 action expects { onLoginSuccessRoute }')
  }

  localStorage.setItem(onLoginSuccessRouteKey, onLoginSuccessRoute);
  webAuth.authorize();
};

export const login = () => {
  return dispatch => {

    // parse the callback url
    webAuth.parseHash(window.location.hash, (err, parsed) => {

      if (parsed) {
        const { accessToken, expiresIn } = parsed;

        // set token
        localStorage.setItem(accessTokenKey, accessToken);

        // set expires
        let expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);

        // initialize user
        dispatch(initializeUser(accessToken));

      } else if (err) {
        console.log(err);
      }

    });
  }
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem('expires_at');

    dispatch(setUser({
      id: null,
      scope: null,
      initialized: true
    }));
  }
};
