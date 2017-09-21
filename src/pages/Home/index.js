import React from 'react';

import AuthContainer from '../../containers/Auth';

import AuthGuard from '../../components/Auth/Guard';
import Dummy from '../../components/Dummy';

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <AuthContainer>
        <AuthGuard guestRender={ () => <p>Not authenticated</p> }>
          <Dummy/>
        </AuthGuard>
      </AuthContainer>
    </div>
  )
};

export default Home;