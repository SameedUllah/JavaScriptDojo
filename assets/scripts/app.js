const defaultReslut = 0;
let currentResult = defaultReslut;
currentResult = currentResult + 10 * 3;

let calculationDiscription = ""+ defaultReslut +" + 10 * 3"
// <<<<<<<  this only works with "`" backticks not single or double quotes and this syntax is called Template literals (Template strings) >>>>>>>
/* let calculationDiscription = `${defaultReslut} + 

 10 * 3`*/ 
 
// let calculationDiscription = `${10+10} + 10 * 3`

outputResult(currentResult,calculationDiscription);
