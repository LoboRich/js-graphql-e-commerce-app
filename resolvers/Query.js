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
  products: (parent, args, {products}) => products,
  product: (parent, {id}, {products}) => {
    return products.find(product => product.id === id);
  },
  categories: (parent, {id}, {categories}) => categories,
  category: (parent, {id}, {categories}) => {
    return categories.find(category => category.id === id);
  }
}