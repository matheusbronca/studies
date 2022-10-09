const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function readDirectory(dirPath) {
  return new Observable(subscriber => {
    try {
      fs.readdirSync(dirPath).forEach(file => {
        subscriber.next(path.join(dirPath, file));
      })
      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}


function readFile() {
  return createPipeableOperator(subscriber => ({
    next(filePath) {
      try {
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
        subscriber.next(fileContent.toString())
      } catch (e) {
        subscriber.error(e)
      }
    }
  }))
}


function getElementsWhoEndsWith(pattern) {
  return createPipeableOperator(subscriber => ({
    next(text) {
      if (!text.endsWith(pattern))
        return

      subscriber.next(text)
    }
  }))
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
    const asc = (obj1, obj2) => obj1[ objProperty ] - obj2[ objProperty ];
    const desc = (obj1, obj2) => obj2[ objProperty ] - obj1[ objProperty ];

    return array.sort(order === 'asc' ? asc : desc);
  };
};

const createPipeableOperator =
  operatorFn =>
    source =>
      new Observable(subscriber => {
        const sub = operatorFn(subscriber)
        source.subscribe({
          next: sub.next,
          error: sub.error || (e => subscriber.error(e)),
          complete: sub.complete || (_ => subscriber.complete())
        })
      })


module.exports = {
  readDirectory,
  getElementsWhoEndsWith,
  readFile,
  // removeIfEmpty,
  // removeIfIncludes,
  // removeOnlyNumbers,
  // removeSymbols,
  // joinElementsByPattern,
  // splitElementsByPattern,
  // orderByNumberProperty,
};
