const fs = require('fs');

// write files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if an error occurs, reject the Promise and send it to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function to ensure the Promise doesn't mistakenly execute the resolve() function 
        return;
      }

      // if everything went smoothly, resolve the Promise and ship the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copy file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok : true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };
    