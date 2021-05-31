import { gql } from "apollo-server-express";

export default gql`
  type seeFollowersResult {
    ok: String!
    error: String
    followers: [User]
    totalPages: Int
  }
  type Query {
    seeFollowers(username: String!, page: Int!): seeFollowersResult!
  }
`;
