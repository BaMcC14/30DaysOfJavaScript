console.log('Day 9');

//Callback
const callback = (n) =>{
  return n ** 2;
}
//Function that takes other function as a callback
function cube(callback, i){
  return callback(i) * 2;
}
console.log(cube(callback, 3));


//Returning Function 
const higherOrder = n =>{
  const secondFunction = m =>{
    const thirdFunction = t =>{
      return 2 * n + 3 * m + t;
    }
    return thirdFunction
  }
  return secondFunction
}

console.log(higherOrder(2)(3)(10));

//Examples of callback
const numbers = [1,2,3,4,5];
const sumArr = arr => {
  let sum = 0;
  const callback = function(element){
    sum+=element
  }
  arr.forEach(callback)
  return sum;
}
console.log(sumArr(numbers))

const myNums = [2,4,6,8,10];
const sumsArr = arr =>{
  let sum = 0;
  const callbackFunction = function(element){
    sum += element;
  }
  arr.forEach(callbackFunction)
  return sum;
}

console.log(sumsArr(myNums))

//Function to print Hello 
// function sayHello(){
//   console.log('Hello')
// }
// setInterval function called to execute the sayHello function every 1000ms(1s)
// setInterval(sayHello, 1000);

function sayHello(){
  console.log('Hello');
}

//setTimeout(sayHello, 1000);


const nums = [1,2,3,4,5];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

nums.forEach(num => console.log(num))

let sum = 0
nums.forEach(element =>  sum+= element)
console.log(sum);

countries.forEach(country => console.log(country.toLocaleUpperCase()))

const numsSquared = nums.map(num => num * num);
console.log(numsSquared)

const upperCountries = countries.map(country => console.log(country.toUpperCase()))

const moreCountries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const moreUpperCountries = moreCountries.map(country => country.toUpperCase())
console.log(moreUpperCountries)

const countriesFirstThreeLetters = moreCountries.map((country) =>
  country.toUpperCase().slice(0,3))
console.log(countriesFirstThreeLetters)


const countriesContainingLand = moreCountries.filter((country) => country.includes('land'));
console.log(countriesContainingLand)

const countriesEndsWithia = moreCountries.filter((country) => country.endsWith('ia'));
console.log(countriesEndsWithia)

const countriesWithFiveLetters = moreCountries.filter((country) => country.length === 5);
console.log(countriesWithFiveLetters);

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

const numArr = [1, 2, 3, 4, 5];

const sumArray = numArr.reduce((acc, cur) =>  acc + cur, 0);
console.log(sumArray);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const areAllString = names.every((name) => typeof name === 'string');
console.log(areAllString);

const score = scores.find((user) => user.score > 80)
console.log(score)

const result = names.findIndex((name) => name.length > 7);
console.log(result)

const ages = [24, 22, 25, 32, 35, 18]
const findAge = ages.findIndex((age) => age < 20);
console.log(findAge)

const bools = [true, true, true, true]
const areSomeTrue = bools.some((index) => index === true);
console.log(areSomeTrue);

const areAllStirng = names.some((name) => typeof name === 'number');
console.log(areAllStirng)

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];

console.log(products.sort());

const numbers2 = [9.81, 3.14, 100, 37];

console.log(numbers2.sort())// 100 is put first
numbers2.sort(function(a, b){
  return a - b;
})
console.log(numbers2);

numbers2.sort(function(a, b){
  return b - a;
})
console.log(numbers2);

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]

users.sort((a, b) => {
  if(a.age < b.age) return -1
  if(a.age > b.age) return 1
  return 0
})
console.log("Users Sorted by Age")
console.log(users)























