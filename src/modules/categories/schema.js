const { gql } = require("apollo-server-express");

module.exports = gql`
  type Category {
    id: ID!
    name: String!
    img: String!
  }

  extend type Query {
    categories: [Category!]!
  }
`;
