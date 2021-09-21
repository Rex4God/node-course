// CommonJs, every file in node is a  module (by default)
//MODULES - Encapsulated Code (only share minimum)
const names =require('./4-names');
const sayHello =require('./5-utils');
const data = require('./6-alternative-flavor');
 require('./7-mind-grenade');

   
  sayHello('Mary')
  sayHello(names.cand_1)
   sayHello(names.cand_2)


// const addSum =(a, b)=>{
//     return a+b;

// }
// console.log(addSum(3,3))