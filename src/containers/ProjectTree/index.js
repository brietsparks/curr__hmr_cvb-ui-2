import React from 'react';
import { compose } from 'redux';

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

export default compose(
  withAuthContext,
  connectToApolloState,
  connectToProjectTreeViewState,
)(ProjectTreeContainer);