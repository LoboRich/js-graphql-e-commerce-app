const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
    Category,
    Product
  },
  context: {
    db
  }
});

server.listen().then(({ url}) => {
  console.log("Server is ready at" + url);
});