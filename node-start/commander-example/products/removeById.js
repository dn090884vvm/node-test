const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const removeById = async (id) => {
  const products = await getAll();
  //   const idx = products.findIndex((item) => item.id === id);
  //   if (idx === -1) {
  //     return null;
  //   }
  //   const [removeProduct] = products.splice(idx, 1);
  //   await updateProducts(products); //perezapisyvaem JSON
  //   return removeProduct;

  // ili 4erez filter
  //   const newProducts = products.filter((item) => item.id !== id);
  //ili

  const idx = products.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newProducts = products.filter((_, index) => index !== idx);
  await updateProducts(newProducts);
  return products[idx];
};

module.exports = removeById;
