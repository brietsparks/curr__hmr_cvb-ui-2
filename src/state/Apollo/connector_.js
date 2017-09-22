import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { apolloClient } from '../../store';

import ProjectsByUserId from '../../graphql/queries/ProjectsByUserId.graphql';

import createProject from '../../graphql/mutations/createProject.graphql';

const __USER_ID__ = "github|5377854";

const withProjectsQuery = graphql(ProjectsByUserId, {
  options: ownProps => {
    return {
      variables: { user_id: __USER_ID__ } //ownProps.userId }
    }
  }
});

const withCreateProjectMutation = graphql(createProject, {
  props: ({ ownProps, mutate }) => ({
    createProject: ({ user_id, title, parent_id }) => mutate({
      variables: { user_id, title, parent_id },

      update: (store, { data: { createProject } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({
          query: ProjectsByUserId,
          variables: { user_id: __USER_ID__ }  //ownProps.userId,}
        });

        // Add our comment from the mutation to the end.
        data.ProjectsByUserId.push(createProject);

        // Write our data back to the cache.
        store.writeQuery({
          query: ProjectsByUserId,
          variables: { user_id: __USER_ID__ },
          data
        });
      },
    })
  })
});

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjectsFromApolloStore: () => apolloClient.readQuery({
      query: ProjectsByUserId,
      variables: { user_id: __USER_ID__ }
    }),
  }
};

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