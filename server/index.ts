import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type SimpleOperationResult {
    value: String!
    id: Int!
  }

  type Query {
    simpleOperation(id: Int!, value: String): SimpleOperationResult!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    simpleOperation: (root, { id, value = 'Hello world!' }) => ({ value, id }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });


app.listen(
  { port: 4000 },
  // eslint-disable-next-line no-console
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
