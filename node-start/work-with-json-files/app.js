// console.log("he");
const productsOperations = require("./products");
// import { nanoid } from "nanoid";
// console.log(productsOperations);

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

// newData = {
//   name: "hernya",
//   price: 4,
//   location: "somewhere",
// };

// invokeAtion({ action: "getById", id: "4" });
// invokeAtion({ action: "add", data: newData });
const updateId = "PqZCgjxTcndifVrcu8ymJ";
// const updateData = {
//   name: "hernya",
//   price: 500,
//   location: "in the hole",
// };
// invokeAtion({ action: "updateById", id: updateId, data: updateData });

invokeAtion({ action: "removeById", id: updateId });
