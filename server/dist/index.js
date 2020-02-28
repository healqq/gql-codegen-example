"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_express_1.gql `
  type SimpleOperationResult {
    value: String!
    id: Int!
  }

  type Query {
    simpleOperation(id: Int!, value: String): SimpleOperationResult
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        simpleOperation: (root, { id, value = 'Hello world!' }) => ({ value, id }),
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
const app = express_1.default();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, 
// eslint-disable-next-line no-console
() => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
//# sourceMappingURL=index.js.map