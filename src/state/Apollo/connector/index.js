import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { updateCache } from './cacheUpdateHelpers';
import ProjectsByUserId from '../../../graphql/queries/ProjectsByUserId.graphql';
import createProject from '../../../graphql/mutations/createProject.graphql';

const withProjectsQuery = graphql(ProjectsByUserId, {
  options: ownProps => {
    return {
      variables: { user_id: ownProps.userId },
    }
  },
  skip: ownProps => !ownProps.userIsAuthenticated
});

const withCreateProjectMutation = graphql(createProject, {
  props: ({ ownProps, mutate }) => ({
    createProject: ({ user_id, title, parent_id }) => mutate({
      variables: { user_id, title, parent_id },

      update: (store, { data: { createProject } }) =>
        updateCache({
          store,
          mutationResult: createProject,
          query: ProjectsByUserId,
          queryVariables: { user_id: ownProps.userId },
          mutateData: (data, mutationResult) => data.ProjectsByUserId.push(mutationResult)
        })
    })
  })
});

export const apolloConnector = InnerComponent => {

  const ConnectedComponent = compose(

    withProjectsQuery,
    withCreateProjectMutation
  )(InnerComponent);

  return class ApolloStoreConnectionWrapper extends Component {
    render() {
      return (
        <ConnectedComponent {...this.props} />
      );
    }
  };
};

export default apolloConnector;