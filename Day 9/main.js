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























