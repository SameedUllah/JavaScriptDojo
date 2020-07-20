const defaultReslut = 0;
let currentResult = defaultReslut;
currentResult = currentResult + 10 * 3;

function add(num1,num2) {
   const result = num1+num2;
    return result;
}

currentResult = (1,2);






let calculationDiscription = ""+ defaultReslut +" + 10 * 3";
/* <<<<<<<  this only works with "`" backticks not single or double quotes and this syntax is called Template literals (Template strings) >>>>>>>
 let calculationDiscription = `${defaultReslut} + 10 * 3`;
 let calculationDiscription = `${10+10} 
 
+ 10 * 3`  this will be actually treated as a back space ...but in single or double qoutes we can do this to add whitespace
 let calculationDiscription = ""+ defaultResult +" \n
+ 10 * 3";
 let calculationDiscription = 'hello \' world ' >> if we want to print singleqoute but we also used it around string then we can use \ because the thing after \ is treated differently (this is called escape character)

 */ 

outputResult(currentResult,calculationDiscription);
