import React from 'react';
import { compose } from 'redux';

import withAuthContext from '../../components/Auth/contextConsumerHOC';
import connectToProjectTreeViewState from '../../state/ProjectTreeView/connector';
import connectToApolloState from '../../state/Apollo/connector';

import RequireAuthentication from '../../components/Auth/Guard';
import LoginButton from '../../components/Auth/LoginCTAButton';

import Dummy from '../../components/Dummy';

export const ProjectTreeContainer = props => {

  const { userIsAuthenticated, showLogin } = props;

  console.log(userIsAuthenticated);
  return (
    <div>
      <h2>Project Tree Container</h2>

      <RequireAuthentication
        userIsAuthenticated={userIsAuthenticated}
        guestRender={ () => <LoginButton showLogin={showLogin({ onSuccessRedirect: '/' })} />}
      >
        <Dummy/>
      </RequireAuthentication>


    </div>
  )
};

export default compose(
  withAuthContext,
  connectToApolloState,
  connectToProjectTreeViewState,
)(ProjectTreeContainer);