import { actions as actionsTypes } from './constants';

export const addSkillCriterion = ({ projectId, skillId }) => {
  return {
    type: actionsTypes.filters.skills.ADD,
    payload: { skillId, projectId }
  }
};

export const removeSkillCriterion = ({ projectId, skillId }) => {
  return {
    type: actionsTypes.filters.skills.REMOVE,
    payload: { skillId, projectId }
  }
};