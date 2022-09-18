const productsOperations = require("./products");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAtion = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      console.log(product);
      break;
    case "add":
      const newProduct = await productsOperations.add(data);
      console.log(newProduct);
      break;
    case "updateById":
      const updateProduct = await productsOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with ID ${id} not found`);
      }
      console.log(updateProduct);
      break;
    case "removeById":
      const removeProduct = await productsOperations.removeById(id);
      console.log(removeProduct);
      break;
    default:
      console.log("unknown action");
  }
};

const arr = hideBin(process.argv);

// console.log(arr);
const { argv } = yargs(arr);
//ili  v 1 stroku  const{argv}=yargs(process.argv.slice(2))

// console.log(argv);

invokeAtion(argv);
