//+=, -=, /=,++, --,%

let firstNumber=10 + 4 - 10 * 10;
console.log(firstNumber);

let secondNumber=(10 + 4 -10) * 10;
console.log(secondNumber);

firstNumber = firstNumber + 10;
firstNumber += 10; //firstNumber = firstNumber + 10
firstNumber = firstNumber - 10;
firstNumber -= 10;

console.log(10 % 2);
console.log(10/2);

//implicit type conversion

const number1 = 10;
const number2 = 20;
const result= number1 + number2;
console.log(result);

const number3 = 20;
const number4 = "30";
console.log(number3 + number4);
console.log(number3 - number4);