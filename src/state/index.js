import { stateKey as authKey } from './Auth/constants';
import authReducer from './Auth/reducer';

import { stateKey as projectTreeViewKey } from './ProjectTreeView/constants';
import projectTreeViewReducer from './ProjectTreeView/reducer';

export const reducers = {
  [authKey]: authReducer,
  [projectTreeViewKey]: projectTreeViewReducer,
};