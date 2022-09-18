const getAll = require("./getAll");
const { nanoid } = require("nanoid");

const updateProducts = require("./updateProducts");

const add = async (data) => {
  const products = await getAll();
  const newProduct = { ...data, id: nanoid() };
  products.push(newProduct);
  await updateProducts(products);

  return newProduct;
};

module.exports = add;
