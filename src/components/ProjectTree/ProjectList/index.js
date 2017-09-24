import React from 'react';

import Project from '../Project';

const ProjectTreeList = ({ parentId, models, actions, filters }) => {

  const projectComponents = models.map(model => {
    return (
      <li key={model.id}>
        <Project
          model={model}
          actions={actions}
          filters={filters}
        />
      </li>
    )
  });

  return (
    <ul>
      <li>
        <button onClick={ () => actions.createProject({
          user_id: 'github|5377854',
          parent_id: parentId,
          title: 'serg'
        }) }>New Project</button>
      </li>

      { projectComponents }
    </ul>
  );

};

export default ProjectTreeList;