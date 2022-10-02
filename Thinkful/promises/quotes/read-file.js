const fs = require("fs");

//readfile returns new Promise(), takes 2 parameters which are functions.
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, buffer) => {
      if (error) {
        return reject(error);
      }
      resolve(buffer.toString());
    });
  });
}

module.exports = readFile;