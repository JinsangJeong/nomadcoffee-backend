import { gql } from "apollo-server-express";

export default gql`
  type seeFollowingResult {
    ok: String!
    error: String
    following: [User]
  }
  type Query {
    seeFollowing(username: String!, lastId: Int): seeFollowingResult!
  }
`;
