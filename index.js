const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { typeDefs } = require("./schema");

const resolvers = {
  Query: {
    hello: () => {
        return "World!";
    },
    // numberOfAnimals: () => {
    //   return 55;
    // },
    // price: () => {
    //   return 23.09
    // },
    // isCool: () => {
    //   return false
    // },
    // list: () => {
    //   return ['Hello', 'my', 'good friend'];
    // },
    products: () => {
      return products
    },
    product: (parent, args, context) => {
      const productId = args.id;
      return products.find(product => product.id === productId);
    },
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => {
      const { id } = args;
      return categories.find(category => category.id === id);
    }
  },
  Category: {
    products: (parent, args, context) => {
      const categoryId = parent.id;
      return products.filter((product) => product.categoryId === categoryId);
    }
  },
  Product: {
    category: (parent, args, context) => {
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId )
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