const path = require('path');


console.log(path.sep); // separator used for paths


const filePath = path.join('content', 'subfolder', 'test.txt') // joins strings
console.log(filePath);

const base = path.basename(filePath)
console.log(base); // returns name of target file in path
// console.log(__filename);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute); // this returns the absolute path of the file