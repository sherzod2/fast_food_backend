const { gql } = require("apollo-server-express");

module.exports = gql`
  type Team {
    id: ID!
    name: String!
  }

  type Query {
    teams: [Team!]!
  }

  type Mutation {
    login(name: String!, password: String!): Token!
  }
`;
