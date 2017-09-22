import { actions } from '../constants';

import { resumeApi } from '../../../data/connections';
import ProjectsByUserIdQuery from '../../../graphql/ProjectsByUserId';


export default ({ userId }) => {
  return async dispatch => {
    dispatch(before({ userId }));

    let result;

    try {
      const result = await resumeApi({
        query: ProjectsByUserIdQuery,
        variables: { user_id: userId }
      });
    } catch (error) {
      dispatch(failure({ userId, error }));
      return;
    }

    dispatch(success({ userId, result }))
  };
};

const before = ({ userId }) => {
  return {
    type: actions.projects.fetch.BEFORE,
    payload: { userId }
  }
};

const failure = ({ userId, error }) => {
  return {
    type: actions.projects.fetch.AFTER.FAILURE,
    payload: { userId, error }
  }
};

const success = ({ userId, result }) => {
  const projects = result.data.ProjectsByUserId;

  return {
    type: actions.projects.fetch.AFTER.SUCCESS,
    payload: { userId, projects }
  }
};