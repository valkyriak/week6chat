console.log('Hello World, Node.js!')

//Task 2 Working with Arrays
//Question 1
var arr = [1,2,3,4,200]; 
    console.log('Create and indexed array of 5 numbers',arr);

//Question 2
arr.push(7);
    console.log('Add a number to the end of the array',arr);

//Question 3
arr.unshift(9);
    console.log('Add a number to the beginning of the array',arr);

//Question 4
arr.splice(3,0,23);
    console.log('Add an item after the 3rd item in the array',arr);

//Question 5    
arr.pop();
    console.log('Remove the last number from the array',arr);

//Question 6
arr.splice(1,1);
    console.log('Remove the 2nd number from the array',arr);

//Question 7
arr[4] = 100;
    console.log('Edit the 5th element in the array to have a value of 100',arr);

//Question 8
arr.sort(function(a, b) { return a-b; });
    console.log('Sort the array in ascending order (smallest to biggest)',arr);

//Task 3 – Working with JSON
//Question 1
let people = [
    {"firstname": "Steve","lastname": "Jobs"},
    {"firstname": "John","lastname": "Doe"},
    {"firstname": "Ya","lastname": "Yeet"},
];
    console.log("Create a javascript object with a key of people and a value that is an array", people);

//Question 2
let peopleStr = JSON.stringify(people);
    console.log("Convert that object to a JSON string (stingify)", peopleStr);

//Question 3
parsedpeople = JSON.parse(peopleStr);
    console.log("Convert the JSON string back into a javascript object", parsedpeople);

//Task 4 – NPM packages
//Question 1
const arrayAdd = require('array-add-num');
arrayOne = [5,4,3,8]
    console.log("Sum of array is", arrayAdd(arrayOne));

//Question 2
const otherFile = require('./package.json');
console.log(otherFile.dependencies["array-add-num"]);

//Task 5 – Arrow Functions
//Version 1
function multiplyNums(x, y, z) {
    return 'new number is ' + x * y * z;
    }
console.log(multiplyNums(2,2,2));

//Version 2
let multiplyNumsTwo = (x, y, z) => 'new number is ' + x * y * z;
console.log(multiplyNumsTwo(3,3,3));