import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { fetch } from 'apollo-server-env';
import { gql } from 'apollo-server-core';
import operation from './operation';
import {
  GQLExternalQuery, GQLExternalQueryVariables, GQLInlineMutation, GQLInlineMutationVariables,
} from './gql';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

const inlineOperation = gql`
  mutation Inline($value: String!) {
  simple(value: $value) {
    id
    value
  }
}
`;
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
    const response = await client.query<GQLExternalQuery, GQLExternalQueryVariables>(
      {
        query: operation, variables: { id: 1 },
      },
    );
    if (response.data.simple) {
      const { id, value } = response.data.simple;
      // eslint-disable-next-line no-console
      console.log(id, value);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.response);
  }

  try {
    const response = await client.mutate<GQLInlineMutation, GQLInlineMutationVariables>(
      {
        mutation: inlineOperation, variables: { value: 'some value' },
      },
    );
    if (response.data) {
      const { id, value } = response.data.simple;
      // eslint-disable-next-line no-console
      console.log(id, value);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.response);
  }
};

main();
