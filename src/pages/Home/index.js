import React from 'react';

import AuthContainer from '../../containers/Auth';
import ProjectTree from '../../containers/ProjectTree';

import Dummy from '../../components/Dummy';

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      
      <AuthContainer>
        <Dummy/>
      </AuthContainer>
    </div>
  )
};

export default Home;