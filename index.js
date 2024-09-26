/* Uses of ES6 */

const x = 10;
const y = 30;

const result = `The sum of ${x} and ${y} is ${x + y}`;
console.log(result);

// function expression.
const add = function(a, b){
    return a + b;
}

// Arrow function.
const add2 = (a, b) => a + b;
const multiply = (a, b, c) => a * b * c;

const sum = add(55, 5);
console.log(sum);

const sum2 = add(55, 5);
console.log(sum2);

const multiplication = multiply(2, 4, 6);
console.log(multiplication);

// Use Single parameter.

const getFifth = numbers => numbers[4];
const fifth = getFifth([2, 4, 5, 6, 8, 12]);

console.log(fifth);

// No parameter.

const getPI = () => Math.PI;
console.log(getPI());

// Large arrow function.

const doMath = (x, y, z) => {
    const add = x + y + z;
    const multiply = x * y * z;
    const result = add / multiply;
    return result.toFixed(2);
}

console.log(doMath(95, 85, 15));

// Examples of spread operator.

const numbers = [3, 8, 45, 60, 70, 80, 20, 30];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

const numbers2 = [...numbers];

numbers.push(100);
console.log(numbers);
console.log(numbers2);

// Advanced

const number = [...numbers, 55];
console.log(number);

// Destructuring

const person = {
    name: 'mahim',
    age: 21
}
const {name, age} = person;
console.log(name, age);

// Keys

const glass = {
    name: 'glass',
    price: 25,
    made: 'China',
    isCleaned: true
}

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);
console.log(entries);

for(const key of keys){
    const value = glass[key];
    console.log(key, value);
}