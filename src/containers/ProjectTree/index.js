import React from 'react';
import { compose } from 'redux';

import connectToProjectTreeViewState from '../../state/ProjectTreeView/connector';
import connectToApolloState from '../../state/Apollo/connector';

import LoginButton from '../../components/Auth/LoginCTAButton';
import RequireAuthentication from '../../components/Auth/Guard';

import Dummy from '../../components/Dummy';

export const ProjectTreeContainer = props => {

  return (
    <div>
      <h2>Project Tree Container</h2>

      <RequireAuthentication guestRender={
        () => <LoginButton />
      }>
        <Dummy/>
      </RequireAuthentication>


    </div>
  )
};

export default compose(
  connectToApolloState,
  connectToProjectTreeViewState,
)(ProjectTreeContainer);