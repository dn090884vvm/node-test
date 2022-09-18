const fs = require("fs").promises;

const fileOperation = async (filePath, action = "read", data = "") => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      break;
    case "add":
      const result = await fs.appendFile(filePath, data);
      //   return result;
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;
    default:
      console.log("Unknow action");
  }
};

// fileOperation("./files/file.txt");
// fileOperation("./files/file.txt", "add", "\n and ever. fuck yeh");
fileOperation("./files/file.txt", "replace", "here i am");

// fs.readFile("./files/file.txt")
//   .then((data) => {
//     const text = data.toString();
//     console.log(text);
//   })
//   .catch((error) => console.log(error.message));
