const { gql } = require("apollo-server-express");

module.exports = gql`
  type Order {
    id: ID!
    name: String!
    number: String!
    address: String!
    products: String!
    time: Time!
  }

  extend type Query {
    orders: [Order!]!
  }

  extend type Mutation {
    newOrder(
      name: String!
      number: String!
      address: String!
      products: String!
    ): Order
  }

  extend type Mutation {
    deleteOrder(id: ID!): Order
  }
`;
