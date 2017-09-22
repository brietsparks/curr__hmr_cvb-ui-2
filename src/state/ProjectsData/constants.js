export const stateKey = 'projectsDataState';

export const actions = {

  projects: {
    fetch: {
      BEFORE: `${stateKey}.projects.fetch.BEFORE`,
      AFTER: {
        SUCCESS: `${stateKey}.projects.fetch.AFTER.SUCCESS`,
        FAILURE: `${stateKey}.projects.fetch.AFTER.FAILURE`
      }
    }
  }

};
