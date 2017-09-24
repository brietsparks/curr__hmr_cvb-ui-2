import React from 'react';
import { compose } from 'redux';

import connectToAuthStore from '../../state/Auth/connector';
import connectToProjectTreeViewState from '../../state/ProjectTreeView/connector';
import connectToApolloState from '../../state/Apollo/connector';

import LoginButton from '../../components/Auth/LoginCTAButton';
import RequireAuthentication from '../../components/Auth/Guard';
import ProjectTreeModel from '../../models/ProjectTree';
import ProjectTreeComponent from '../../components/ProjectTree';

export const ProjectTreeContainer = props => {

  // actions
  const { addSkillCriterion, removeSkillCriterion, createProject } = props;
  const actions = { addSkillCriterion, removeSkillCriterion, createProject };

  // non actions
  const { filters } = props;

  // project data
  const projects = props.data.ProjectsByUserId; // todo: decouple

  // model
  let projectTreeComponent = null;
  if (projects) {
    const projectTreeModel = ProjectTreeModel(projects, { id: null });
    projectTreeComponent = (
      <ProjectTreeComponent
        model={projectTreeModel}
        actions={actions}
        filters={filters}
      />
    );
  }

  return (
    <div>
      <h2>Project Tree Container</h2>

      <RequireAuthentication guestRender={ () => <LoginButton /> }>
        <p>Authenticated</p>

        { projectTreeComponent }
      </RequireAuthentication>
    </div>
  )
};

export default compose(
  connectToAuthStore,
  connectToApolloState,
  connectToProjectTreeViewState,
)(ProjectTreeContainer);