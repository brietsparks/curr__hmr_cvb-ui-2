import { createApolloFetch } from 'apollo-fetch';

import { API_GATEWAY_ROOT_ENDPOINT } from '../../parameters';

export const resumeApi = createApolloFetch({
  uri: API_GATEWAY_ROOT_ENDPOINT
});