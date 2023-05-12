const { products, categories } = require("../db");

exports.Query = {
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
}