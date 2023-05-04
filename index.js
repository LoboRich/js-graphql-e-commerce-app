const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
      hello: String
      numberOfAnimals: Int
      price: Float
      isCool: Boolean
      list: [String]
  }
`

const resolvers = {
  Query: {
    hello: () => {
        return "World!";
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 23.09
    },
    isCool: () => {
      return false
    },
    list: () => {
      return ['Hello', 'my', 'good friend'];
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url}) => {
  console.log("Server is ready at" + url);
});