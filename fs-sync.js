// {}this is destructuring
// readFileSync is used to read contents from the file ,,parameters are file path and utf8
// WriteFileSync is used to write contents to the file ,,parameters are file path and utf8
const { readFileSync , writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first);
console.log(second);

writeFileSync('./content/result.txt',`Here is the result : ${first} and ${second}`,{flag:'a'});