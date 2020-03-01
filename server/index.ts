import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type SimpleType {
    value: String!
    id: Int!
  }

  type Query {
    simple(id: Int!, value: String): SimpleType!
  }

  type Mutation {
    simple(value: String!): SimpleType!
  }
`;

// uid counter
let uid = 0;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    simple: (root, { id, value = 'Hello world!' }) => ({ value, id }),
  },
  Mutation: {
    simple: (root, { value }) => {
      uid += 1;
      return {
        id: uid,
        value,
      };
    },
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
