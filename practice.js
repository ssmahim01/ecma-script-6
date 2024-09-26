/* Practice Task 1 */

// Arrow

const multiplication2 = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiplication2(5, 6, 8));

// Output => 240

// First normal way

const introduction = "I am a web developer." + "\n" + "I love to code." + "\n" + "I love to eat biryani.";
console.log(introduction);

/* Output => 
I am a web developer.
I love to code.
I love to eat biryani.
*/

// Second easy way

const multiLine = `
I am a web developer.
i love to code.
I love to eat biryani.
`
console.log(multiLine);

/* Output =>
I am a web developer.
i love to code.
I love to eat biryani.
*/

// Default parameter

const addition = (num1, num2 = 5) => num1 + num2;
const sumOfArrow = addition(5);
const sumOfArrow2 = addition(5, 15);

console.log(sumOfArrow);

// Output => 10

console.log(sumOfArrow2);

// Output => 20

/* Practice Task 2 */

// Even

const findEventLength = (friends) => {
    const eventLengthNames = [];

    for(let i = 0; i < friends.length; i++){
        if(friends[i].length % 2 === 0){
            eventLengthNames.push(friends[i]);
        }
    }
    return eventLengthNames;

}

const myFriends = findEventLength(["MZ", "Rahim", "Rafi Khan Omor", "Jubayer"]);
console.log(myFriends);

// Output => [ 'MZ', 'Rafi Khan Omor' ]

/* Practice Task 3 */

// Average of squared elements

const averageSquaredElements = (numbers) => {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i] ** 2;
    }
    const average = sum / numbers.length;
    return average;
}

const numbersArray = averageSquaredElements([2, 5, 6, 8, 10]);
console.log(numbersArray);

// Output => 45.8

/* Practice Task 4 */

// Find max number from the combined array

const findMax = (array1, array2) => {
    const combineAllArray = [...array1, ...array2];
    console.log(combineAllArray);
    const maxNumber = Math.max(...combineAllArray);
    return maxNumber;
}

const firstArray = [2, 5, 6, 7, 8, 16, 66, 10];
const secondArray = [20, 15, 80, 70, 60, 50];

const checkResult = findMax(firstArray, secondArray);
console.log(checkResult);

/* First Output =>
[
   2,  5,  6,  7,  8, 16,
  66, 10, 20, 15, 80, 70,
  60, 50
]
*/

// Second Output => 80