import React from 'react';

import withAuthContext from '../../components/Auth/contextConsumerHOC';
import connectToProjectTreeViewState from '../../state/ProjectTreeView/connector';
import connectToApolloState from '../../state/Apollo/connector';

export const ProjectTreeContainer = props => {
  return (
    <div>
      <h2>Project Tree Container</h2>
    </div>
  )
};

export default (
  // withAuthContext(
  //   connectToProjectTreeViewState(
      connectToApolloState(
        ProjectTreeContainer
      )
    // )
  // )
);