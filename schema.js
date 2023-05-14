const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    # numberOfAnimals: Int
    # price: Float
    # isCool: Boolean
    # list: [String]
    products(filter: ProuductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProuductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProuductsFilterInput {
    onSale: Boolean
  }
`
