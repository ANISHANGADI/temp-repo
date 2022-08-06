/*const amount=12;
if(amount <10)
    console.log("small number");
 else
    console.log("large number");

console.log("hey its my first node app")    */
//module



/*const sayhi=((name)=>{
    console.log(`Hello there my name is ${name}`);
})
sayhi('anish')
sayhi(john);
sayhi(peter);
*/
// req represents the incoming request.. Response is what we are sending back
const _ = require('loadash')
const items = [1,[2,[3,[4]]]];
const newitems= _.flattenDeep(items);
console.log(newitems);
