import { cloneDeep, remove } from 'lodash';

import { actions as actionTypes } from './constants';

const defaultState = {
  projects: []
};

const projectsDataReducer = (initialState = defaultState, action = {}) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {

  }

  return state;
};

export default projectsDataReducer;