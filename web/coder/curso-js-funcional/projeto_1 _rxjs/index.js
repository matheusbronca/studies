const path = require('path');
const {
  readDirectory,
  getElementsWhoEndsWith,
  readFile,
  readFiles,
  removeIfEmpty,
  removeIfIncludes,
  removeOnlyNumbers,
  removeSymbols,
  splitElementsByPattern,
  joinElementsByPattern,
  orderByNumberProperty,
} = require('./functions');

const directoryPath = path.join(__dirname, '..', 'dados', 'legendas');
const symbols = [
  '.',
  '?',
  '-',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

const groupByWords = (words) => {
  return Object.values(
    words.reduce((acc, word) => {
      const standardizedWord = word.toLowerCase();
      const hasStandardizedWordAtAccumulator = acc[ standardizedWord ];

      const wordQuantity = hasStandardizedWordAtAccumulator
        ? (acc[ standardizedWord ].quantidade += 1)
        : 1;

      acc[ standardizedWord ] = {
        elemento: standardizedWord,
        quantidade: wordQuantity,
      };

      return acc;
    }, {})
  );
};

readDirectory(directoryPath)
  .pipe(
    getElementsWhoEndsWith('.srt'),
    readFile()
  )
  .subscribe(console.log)
// const mostUsedWords = pipe(
//   readDirectory,
//   (files) => getElementsWhoEndsWith(files, '.srt'),
//   (SRTFiles) => readFiles(SRTFiles),
//   (filesContent) => joinElementsByPattern(filesContent, '\n'),
//   (filesContent) => splitElementsByPattern(filesContent, '\n'),
//   removeIfEmpty,
//   (lines) => removeIfIncludes(lines, '-->'),
//   removeOnlyNumbers,
//   removeSymbols(symbols),
//   (elements) => joinElementsByPattern(elements, ''),
//   (filesContent) => splitElementsByPattern(filesContent, ' '),
//   removeIfEmpty,
//   removeOnlyNumbers,
//   groupByWords,
//   orderByNumberProperty('quantidade', 'desc')
// )(directoryPath);

// mostUsedWords.then((res) => console.log(res));
