console.log(__dirname);
console.log(__filename);
console.log(require);
const time=setInterval(()=>
{
    console.log("hello world");
},1000)
module.exports = time;