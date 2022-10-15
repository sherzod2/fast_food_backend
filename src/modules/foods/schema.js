const { gql } = require("apollo-server-express");

module.exports = gql`
  type Food {
    id: ID!
    name: String!
    img: String!
    price: Int!
  }
  extend type Query {
    foods: [Food!]!
    food(id: ID!): [Food!]!
  }

  extend type Mutation {
    deleteFood(id: ID!): Food
    insertFood(name: String!, img: String!, price: Int!, shop_id: Int): Food
  }
`;
