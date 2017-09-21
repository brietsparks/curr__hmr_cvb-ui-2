import React, { Component } from 'react';
import createConnector from '../createConnector';

import { stateKey } from './constants';
import * as actions from './actions';

const mapStateToProps = state => {
  return state[stateKey];
};

const mapDispatchToProps = dispatch => {
  return {
    addSkillCriterion: ({ projectId, skillId }) =>
      dispatch(actions.addSkillCriterion({ projectId, skillId })),

    removeSkillCriterion: ({ projectId, skillId }) =>
      dispatch(actions.removeSkillCriterion({ projectId, skillId }))
  }
};

export default createConnector(mapStateToProps, mapDispatchToProps);