const fs = require('fs');
const path = require('path');

function readDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(dirPath);
      const completefiles = files.map((file) => path.join(dirPath, file));
      resolve(completefiles);
    } catch (e) {
      reject(e);
    }
  });
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
      resolve(fileContent.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function readFiles(filesPath) {
  return Promise.all(filesPath.map((filePath) => readFile(filePath)));
}

function getElementsWhoEndsWith(elements, pattern) {
  return elements.filter((element) => element.endsWith(pattern));
}

function removeIfEmpty(array) {
  return array.filter((element) => element.trim());
}

function removeIfIncludes(array, pattern) {
  return array.filter((element) => !element.includes(pattern));
}

function removeOnlyNumbers(array) {
  return array.filter((element) => {
    const num = parseInt(element.trim());
    return num !== num;
  });
}

function removeSymbols(symbols) {
  return (array) =>
    array.map((element) => {
      return symbols.reduce(
        (acc, symbol) => acc.split(symbol).join(''),
        element
      );
    });
}

const joinElementsByPattern = (elements, pattern) => elements.join(pattern);
const splitElementsByPattern = (elements, pattern) => elements.split(pattern);

const orderByNumberProperty = (objProperty, order = 'asc') => {
  return (array) => {
    const asc = (obj1, obj2) => obj1[objProperty] - obj2[objProperty];
    const desc = (obj1, obj2) => obj2[objProperty] - obj1[objProperty];

    return array.sort(order === 'asc' ? asc : desc);
  };
};

function pipe(...fns) {
  return (value) => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) return fn(await acc);
      return fn(acc);
    }, value);
  };
}

module.exports = {
  readFile,
  readFiles,
  readDirectory,
  getElementsWhoEndsWith,
  removeIfEmpty,
  removeIfIncludes,
  removeOnlyNumbers,
  removeSymbols,
  joinElementsByPattern,
  splitElementsByPattern,
  orderByNumberProperty,
  pipe,
};
