import { stateKey } from './constants';

import { apolloClient } from 'src/state';

import getProjectsByUserIdQuery from 'src/graphql/queries/getProjectsByUserId.graphql';

export const getApolloState = state => state[stateKey];

export const queryProjectsByUserId = ({ userId }) => {
  let r = [];
  try {
    r = apolloClient.readQuery({
      query: getProjectsByUserIdQuery,
      variables: { user_id: userId }
    });
  } catch (e) {
  }

  return r;
};

