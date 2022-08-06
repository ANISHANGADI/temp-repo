//to find path setup
const path = require('path');
console.log(path.sep);

//to find the path link
const filepath = path.join('/content','text.txt');
console.log(filepath);


//if we want only text.txt
const base = path.basename(filepath);
console.log(base);


//to find path resolve
const absolute = path.resolve(__dirname,'content','text.txt');
console.log(absolute);
