import React from 'react';

import ProjectTreeContainer from '../../containers/ProjectTree';

export const Home = props => {

  const currentRoute = props.match.path;

  return (
    <div>
      <h1>Home Page</h1>
        <ProjectTreeContainer currentRoute={currentRoute} />
    </div>
  )
};

export default Home;