import { gql } from 'apollo-server-express';

export default gql`
  query SimpleQuery(
  $id: Int!
  $value: String) {
  simpleOperation(id: $id, value: $value) {
    id
    value
  }
}
`;
