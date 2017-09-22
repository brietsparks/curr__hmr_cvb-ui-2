export function updateCache({ store, mutationResult, query, queryVariables, mutateData }) {
  const variables = queryVariables;

  const data = store.readQuery({ query, variables });

  mutateData(data, mutationResult);

  store.writeQuery({ query, variables, data });
}

export function appendToCollection({ store, mutationResult, queryObject, queryName, queryVariables }) {
  const query = queryObject;
  const variables = queryVariables;

  const data = store.readQuery({ query, variables });

  data[queryName].push(mutationResult);

  store.writeQuery({ query, variables, data });
}

const a =
{
  update: (store, { data: { createProject } }) => {
    // Read the data from our cache for this query.
    const data = store.readQuery({
      query: ProjectsByUserId,
      variables: { user_id: __USER_ID__ }  //ownProps.userId,}
    });

    // Add our comment from the mutation to the end.
    data.ProjectsByUserId.push(createProject);

    // Write our data back to the cache.
    store.writeQuery({
      query: ProjectsByUserId,
      variables: { user_id: __USER_ID__ },
      data
    });
  },
}