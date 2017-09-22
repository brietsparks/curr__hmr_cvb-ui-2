import { getAccessToken } from '../browserStorage';

export const requestAuthorizationMiddleware = {
  applyMiddleware:(req, next) => {
    req.options.headers = req.options.headers || {};

    const token = getAccessToken();
    req.options.headers.authorization = token ? `Bearer ${token}` : null;

    next();
  }
};

export default [
  requestAuthorizationMiddleware
];