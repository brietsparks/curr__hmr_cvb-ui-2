import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { resumeApi } from './data/connections';
import ProjectsByUserId from './graphql/ProjectsByUserId';
(async function foo() {
  let r;

  try {
    r = await resumeApi({
      query: ProjectsByUserId,
      variables: { user_id: 'github|5377854' }
    })
  } catch (e) {
    console.log(e)
  }

  console.log(r);
})();

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
