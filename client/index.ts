import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { fetch } from 'apollo-server-env';
import operation from './operation';
import { GQLSimpleQueryQuery, GQLSimpleQueryQueryVariables } from './gql';
// import { ApolloError } from 'apollo-server-express';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

const link = createHttpLink({
  uri: GRAPHQL_URL,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: fetch as any,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const main = async () => {
  try {
    const response = await client.query<GQLSimpleQueryQuery, GQLSimpleQueryQueryVariables>(
      {
        query: operation, variables: { id: 1 },
      },
    );
    if (response.data.simpleOperation) {
      const { id, value } = response.data.simpleOperation;
      // eslint-disable-next-line no-console
      console.log(id, value);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.response);
  }
};

main();
