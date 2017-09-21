import { keys } from './constants';

export const getAccessToken = () => localStorage.getItem(keys.ACCESS_TOKEN);

export const clearAccessToken = () => {
  localStorage.removeItem(keys.ACCESS_TOKEN);
  localStorage.removeItem(keys.ACCESS_TOKEN_EXPIRATION);
};
