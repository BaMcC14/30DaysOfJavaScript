//1
function fullName(){
  console.log('Samuel L. Jackson');
}

fullName();

//2
function fullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}

console.log(fullName('Morgan', 'Freeman'))

//3
function addNumbers(num1, num2){
  let sum = num1 + num2;
  return sum;
}

console.log(addNumbers(5, 8));

//4
function areaOfRectangel(lenght, width){
  let area = lenght * width;
  return area;
}

console.log(areaOfRectangel(3, 6));

//5
function parimeterOfRectangle(lenght, width){
  let parimeter = 2 * (lenght + width);
  return parimeter;
}

console.log(parimeterOfRectangle(4, 8));

//6
function volumeOfRectPrism(l, w, h){
  let volume = l * w * h;
  return volume;
}

console.log(volumeOfRectPrism(3,8,4))

//7
function areaOfCircle(r){
  let area = Math.PI * r ** 2;
  return area;
}

console.log(areaOfCircle(2));

//8
function circumOfCircle(r){
  let circumference = 2 * Math.PI * r;
  return circumference
}

console.log(circumOfCircle(3))


//9
function density(mass, volume){
  let density = mass / volume;
  return density;
}

console.log(density(9, 5))

//10
function speed(distance, time){
  let speed = distance / time;
  return speed;
}

console.log(speed(300, 10));


//11
function weight(mass, gravity){
  let weight = mass * gravity;
  return weight;
}

console.log(weight(20, 9.81))


//12
function convertCelsiusToFahrenheit(c){
  let f = (c * 9/5) + 32;
  return f;
}

console.log(convertCelsiusToFahrenheit(10));

//13
function checkBMI(weight, height){
  let bmi = weight / (height * height);
  if(bmi <= 18.5){
    return 'Underweight' + " BMI: "+bmi;
  } else if(bmi <= 24.9){
    return 'Normal weight' + " BMI: "+bmi;
  } else if(bmi <= 29.9){
    return 'Overweight' + " BMI: "+bmi;
  } else {
    return 'Obease' + " BMI: "+bmi;
  }
}
console.log(checkBMI(66, 1.88))


//14
function checkSeason(month){
  if(month == 'december' || month == 'january' || month == 'febuary'){
    return 'Winter';
  } else if(month == 'march' || month == 'april' || month ==  'may'){
  return 'Spring';
  } else if(month == 'june' || month == 'july' || month == 'august'){
    return 'Summer';
} else if(month == 'september' || month == 'october' || month == 'november'){
  return 'Autumn';
} else {
  return 'Enter a month';
}
}
console.log(checkSeason('april'))
console.log(checkSeason('november'))
console.log(checkSeason('may'))
console.log(checkSeason('december'))
console.log(checkSeason('Not a month'))
console.log(checkSeason('september'))

//15
function findMax(a, b, c){
  let max = 0;
  for(const elements of arguments){
    if(elements > max){
      max = elements;
    }
  }return max;
}

console.log(findMax(1, 30, 4))
console.log(findMax(100, 30, 4))
console.log(findMax(1, 30, 50))
console.log(findMax(1, -30, 4))

//Levle 2
//16
function showDateTime(){
  let newDate = new Date;
  let month = newDate.getMonth();
  let date = newDate.getDate();
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let min = newDate.getMinutes();

  date = date < 10 ? '0' + date.toString(): date;
  month = month < 10 ? '0' + month.toString() : month;
  hour = hour < 10 ? '0' + hour.toString() : hour;
  min = min < 10 ? '0' + min.toString() : min

  let fullDate = `${month}/${date}/${year} ${hour}:${min}`;
  return fullDate;
}
console.log(showDateTime())


//17
function swapValues(x, y){
  return [y, x]
}

console.log(swapValues(2, 5));

//18
function reverseArray(arr){
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([5, 4, 3, 2, 1]));
console.log(reverseArray(["A", "B", "C", "D", "E"]));

//19
function capitalizedArray(arguments){
  let capArr = [];
  for(const element of arguments){
    capArr.push(element.toUpperCase());
  }
  return capArr;
}

console.log(capitalizedArray(['a', 'b', 'c']))


//20

function addItem(arr, item){
 arr.push(item);
 return arr;
}
let myArr = []

console.log(addItem(myArr,'pants'));
console.log(addItem(myArr,'socks'));
console.log(addItem(myArr,'shirt'));


//21
let removeItem = (arr, index) =>{
  arr.splice(index, 1);
  return arr;
}

console.log(removeItem(myArr, 2))


//22
function sumOfNumbers(nums){
  if(nums == 0) return 0;
  else return nums + sumOfNumbers(nums - 1);
}
console.log(sumOfNumbers(5))

//23
function sumOfOdds(nums){
  if(nums <= 0) return 0;
  nums = nums % 2 == 0? nums - 1: nums;
  return nums + sumOfOdds(nums - 2);
}
console.log(sumOfOdds(6));

//24 
function sumOfEven(nums){
  if(nums <= 0) return 0; 
  nums = nums % 2 == 0? nums: nums - 1;
  return nums + sumOfEven(nums - 2);
}
console.log(sumOfEven(6));

//25
function evensAndOdds(nums){
  let even = 0; 
  let odd = 0;

  if(nums > 0 && nums % 2 == 0){
    even += 1;
    evensAndOdds(nums - 1)
  } else if (nums > 0 && nums % 2 != 0){
    odd += 1;
    evensAndOdds(nums - 1)
  } 
    return `Evens: ${even} Odds: ${odd}`;
  }
  
console.log(evensAndOdds(4))

//26
function evensAndOdds(number) {
  let evens = 0;
  let odds = 0;

  for (let i = number; i >= 0; i--) {
    if (i % 2 === 0) {
      // Even number
      evens++;
    } else {
      // Odd number
      odds++;
    }
  }

  return { evens, odds };
}

const result = evensAndOdds(50);
console.log('The number of odds are ' + result.odds);
console.log('The number of evens are ' + result.evens);

//27
function sumsAll(...arguments){
  let sum = 0;
  for(const elements of arguments){
    sum += elements;
  }
  return sum;
}
console.log(sumsAll(6, 6, 1))

//28
function generateIP(){
  let a = parseInt(Math.random() * 255)
  let b = parseInt(Math.random() * 255)
  let c = parseInt(Math.random() * 255)
  let d = parseInt(Math.random() * 255)
  return `${a}.${b}.${c}.${d}`;
}

console.log(generateIP())
//255.255.255.255

function generateMacAddress(){
  let arr = [];
  let alphaNumbers = '0123456789ABCDEF';
  for(let i = 1; i <= 6; i++){
    let id1 = Math.ceil(Math.random() * 15);
    let id2 = Math.ceil(Math.random() * 15);
    arr.push(alphaNumbers[id1] + alphaNumbers[id2]);
  }
  return arr.join(':');
}
console.log(generateMacAddress())

function generateHexdeciam(){
  let arr = [];
  let alphaNumbers = '0123456789ABCDEF';
  for(let i = 0; i < 6; i++ ){
    let index = Math.ceil(Math.random() * alphaNumbers.length) - 1;
    arr.push(alphaNumbers[index]);
  }
   return '#' + arr.join('');
}

console.log(generateHexdeciam())

//function userIdGenerator(){
  //let arr = []
  //let alphaNumbers = '0123456789ABCDEFGHIJKLMONPQRSTUVWXYZ123456789'

  //for(let i = 0; i < 7; i++){
  // let index = Math.ceil(Math.random() * alphaNumbers.length) - 1;
  //  arr.push(alphaNumbers[index]);
  // }
  // return arr.join('');
//}
//console.log(userIdGenerator())

/* function userIdGeneratorByUser(){
  let numOfChar = parseInt(prompt('Enter the number of characters needed.'));
  let numOfIds = parseInt(prompt('Enter the number of IDs needed:'));
  let arr = []
  let alphaNumbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ123456789'
  for(let j = 0; j < numOfIds; j++){
    for(let i = 0; i < numOfChar; i++){
      let index = Math.ceil(Math.random() * alphaNumbers.length) - 1;
      arr.push(alphaNumbers[index]);     
    }
    arr.push('\n')
  }
    return arr.join('');
}
console.log(userIdGeneratorByUser()) */

function rgbColorGenerator(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgbColor = 'rgb(' + r +','+ g +','+ b + ')';
  return rgbColor;
}
console.log(rgbColorGenerator());


function arrayOfHexaColors(){
  let len = Math.floor(Math.random() * 10);
  let hexArr = [];
  let alphaNumbers = '0123456789ABCDEF';
  for(let j = 0; j < len; j++){
    hexArr.push('#');
  for(let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * alphaNumbers.length - 1)
    
    hexArr.push(alphaNumbers[index])
  }
  hexArr.push('\n')
}
  return hexArr.join('')
}
console.log(arrayOfHexaColors())

function arrayOfRgbColors(){
  let len = Math.floor(Math.random() * 10);
  let rgbArr = [];
  
  for(let i = 0; i < len; i++){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgbColor = 'rgb: ' + r + ', ' + g + ', ' + b
    rgbArr.push(rgbColor);
  }
return rgbArr;
}
console.log(arrayOfRgbColors())

function factoral(n){
 if(n <= 1) return 1;
 else return n * factoral(n-1); 
}
console.log(factoral(3));

let isEmpty = (args) => !Boolean(args.lenght);
console.log(isEmpty(Array()));

let sum = (...args) => {
  let total = 0;
  for(const elements of args) total += elements;
  return total;
}
console.log(sum(2, 4));
console.log(sum(33, 45, 21, 40));

let sumOfArrayItems = (arr) => {
  let sum = 0;
  for(const elements of arr) sum += elements;
  return sum;
}
myArr = [1, 3, 4, 5]
console.log(sumOfArrayItems(myArr))

let average = (arr) => {
  return sumOfArrayItems(arr) / arr.length;
}

myArr2 = [2, 4, 5, 6, 8]
console.log(average(myArr2));

let modifyArray = arr => {
  if(arr.length < 5) return 'Item Not Found.';
    arr[4] = arr[4].toUpperCase();
    return arr;
}

myArr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log(modifyArray(myArr2))

/* function allUnique(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.lenght; j++){
      if(arr[i] == arr[j])
        return false;
    }
  } return true;
} */

function allUnique(arr) {
  for(let x = 1; x < arr.length; x++) {
    for(let i = 0; i< x; i++) {
      if(arr[x] == arr[i])
        return false;
    }
  } return true;
}

myArr3 = ['a', 'a', 'a']
myArr5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

console.log(allUnique(myArr3))
console.log(allUnique(myArr5))


let allSameDataType = arr => {
  if(arr.lenght === 0){
    return true;
  }
  let type = typeof arr[0];
  for(const i of arr){
    if(typeof i !== type){
      return false;
    }
  }
  return true;
}

myArr3 = ['a', 'a', 'a'];
myArr4 = [2, 'a', 'c', 12, 'd', myArr3];
myArr5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(allSameDataType(myArr3));
console.log(allSameDataType(myArr4));

function randomNums(){
  let arr = []
  for(let i = 0; i < 7; i++){
    let random = Math.ceil(Math.random() * 9);
    let allUnique = true;
    for(const x of arr){
      if(random == x){
        allUnique = false;
        break;
      }
    }
    if(allUnique) arr.push(random);
  }
return arr;
}
console.log(randomNums())
































