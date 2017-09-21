import { stateKey as authKey } from './Auth/constants';
import authReducer from './Auth/reducer';

export const reducers = {
  [authKey]: authReducer
};