console.log('Day 7')

function square(){
  let num = 2;
  let sq = num * num;
  console.log(sq)
}

square(); // 4

function addTwoNumbers(){
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;
  console.log(sum)
}

addTwoNumbers()// 30

function printFullName(){
  let firstName = 'Tom';
  let lastName = 'Cruise';
  let space = ' ';
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName()

//Function Returning Value.
function printFullName2(){
  let firstName = 'Tom';
  let lastName = 'Cruise';
  let space = ' ';
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(printFullName2());

function addTwoNumbers2(){
  let numOne = 3;
  let numTwo = 5; 
  let sum = numOne + numTwo;
  return sum;
}

console.log(addTwoNumbers2())

//Function with Parameters
function areaOfCircle(r){
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10));

function square(number){
  return number * number;
}

console.log(square(10));

//Function with two parameters
function sumTwoNumbers(numOne, numTwo){
  let sum = numOne + numTwo;
  console.log(sum)
}

sumTwoNumbers(10, 20); //If a function doesn't return it doesn't store data, so it should return. 

function sumTwoNumbers(numOne, numTwo){
  let sum = numOne + numTwo;
  return sum;
}
console.log(sumTwoNumbers(20, 40));

function printFullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}

console.log(printFullName('Tom', 'Hanks'))

//Function with three parameters 
function localAddress(city, state, country){
  let fullAddress = `${city}, ${state} ${country}`;
  return fullAddress;
}

console.log(localAddress('New Orleans', 'Louisiana', 'USA'))

//Function taking an array as a parameter and sum the numbers in the array.
function sumArrayValues(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

//Functions with unlimited number of parameters
  //Accessing the arguments object.
  function sumAllNums(){
    console.log(arguments)
  } 

  sumAllNums(1, 2, 3, 4, 5);

  //Function declaration
  function sumAllNumsLoop(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }
  console.log(sumAllNumsLoop(1, 2, 3, 4, 5))
  console.log(sumAllNumsLoop(10, 20, 30, 40, 50))

//Anonymous Function
const anonymousFun = function(){
  console.log('Anonymous function')
}
console.log(anonymousFun)

//Expression Function
const square1 = function(n){
  return n * n;
}
console.log(square1(2));

//Self Invoking Functions
(function(n) {
  console.log(n * n);
})(4)

let squaredNum1 = (function(n){
  return n * n;
})(10)
console.log(squaredNum1)

//Arrow Function
const square2 = n => {
  return n * n;
}
console.log(square2(8));

//Arrow function with an array as a parameter. 
const changeToUpperCase = arr => {
  const newArr = []
  for(const element of arr){
    newArr.push(element.toUpperCase());
  }
  return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

console.log(changeToUpperCase(countries));

const printFullName3 = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

console.log(printFullName3('Tom', 'Holland'));

//Arrow Function taking unlimited number of parameters
const sumAllNums2 = (...args) => {
  console.log(args)
}

//Functions with default parameters
function greeting(name = 'New User'){
  let message = `${name}, Welcome to 30 Days of JavaScript!`
  return message;
}

console.log(greeting());
console.log(greeting('Blake'));

function generateFullName(firstName = 'Morgan', lastName = 'Freeman'){
  let fullName = `${firstName} ${lastName}`
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName('Tom', 'Cruise'));

function calculateAge(birthYear, currentYear = 2023){
  let age = currentYear - birthYear;
  return age;
}

console.log(calculateAge(1990));
console.log(calculateAge(1975));

function weightOfObject(mass, gravity = 9.81){
  let weight = mass * gravity + ' N'
  return weight;
}

console.log('Weight of an object in Newtons: ' + weightOfObject(100));
console.log('Weight of an object in Newtons: ' + weightOfObject(100, 1.62));

//Functions above written in arrow functions

const myGreeting = (name = 'Blake') => {
  let message = `${name}, Welcome to 30 Days of JavaScript!`;
  return message;
}
console.log(myGreeting());
console.log(myGreeting('Tom'));


const myFullName = (firstName = 'Morgan', lastName = 'Freeman') => {
  let fullName = `${firstName} ${lastName}`
  return fullName;
}

console.log(myFullName());
console.log(myFullName('Tom', 'Holland'));

const calcualteAgeFun = (birthYear, currentYear = 2023) => {
  let age = currentYear - birthYear;
  return age;
}
console.log(calcualteAgeFun(2000));
console.log(calcualteAgeFun(1960));

const weightOfObject2 = (mass, gravity = 9.81) => {
  let weight = mass * gravity + " N";
  return weight;
}

console.log(weightOfObject2(40));
console.log(weightOfObject2(1000));

















