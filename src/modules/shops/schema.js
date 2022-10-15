const { gql } = require("apollo-server-express");

module.exports = gql`
  type Shop {
    id: ID!
    name: String!
    img: String!
  }

  extend type Query {
    shops: [Shop!]!
    shop(id: ID!): [Shop!]!
  }
  extend type Mutation {
    deleteShop(id: ID!): Shop
    insertShop(name: String!, img: String!, category_id: Int!): Shop
  }
`;
