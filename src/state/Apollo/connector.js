import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import ProjectsByUserIdQuery from '../../graphql/queries/ProjectsByUserId.graphql';

const withProjectsQuery = graphql(ProjectsByUserIdQuery, {
  options: ownProps => {

    return {
      variables: { user_id: "github|5377854" } //ownProps.userId }
    }
  }
});

export const apolloConnector = InnerComponent => {

  const ConnectedComponent = compose(
    // connect(s => s),
    withProjectsQuery
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