const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    access_token(username: String!, password: String!): Token
  }
`;
