import { gql } from 'apollo-server-express';

export default gql`
  query External(
  $id: Int!
  $value: String) {
  simple(id: $id, value: $value) {
    id
    value
  }
}
`;
