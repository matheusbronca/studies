const { readFile } = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dados.txt');

const showFileContent = (path) => {
  return new Promise((resolve) => {
    return readFile(path, (_, res) => {
      resolve(res.toString());
    });
  });
};

showFileContent(filePath).then(console.log);
