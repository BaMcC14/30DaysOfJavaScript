console.log("Day 5")
//Empty Array
const arr1 = Array()
console.log(arr1)
const arr2 = []
console.log(arr2)
//Array with 6 empty values
const arr3 = Array(6)
console.log(arr3) 

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] //array of numbers 
console.log('Numbers: ', numbers)
console.log('Number of numbers: ', numbers.length)

const fruits = ['banana', 'orange', 'mango', 'lemon']//array of strings
console.log('Fruits: ', fruits)
console.log('Number of fruits: ', fruits.length)

const vegetables = ['tomato', 'potato', 'cabbage', 'onion', 'carrot']//array of strings
console.log('Vegetables: ', vegetables )
console.log('Number of vegetables: ', vegetables.length)

const webTech = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']//array of strings
console.log('Web Technologies: ', webTech)
console.log('Number of Web Technologies: ', webTech.length)

//const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] //array of strings
//console.log('Countries: ', countries)
//console.log('Number of countries: ', countries.length)

//Arrays storing different data types
const myArray = [
  'Blake',
  200,
  true,
  {country: 'US', city: 'New Orleans'},
  {skills: ['HTML', 'CSS', 'JS', 'Python']}
]
console.log(myArray)

let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits2[0] 
console.log(firstFruit)
let secondFruit = fruits2[1]
console.log(secondFruit)
let lastIndex = fruits2.length - 1
let lastFruit = fruits2[lastIndex]
console.log(lastFruit)

const num = [1, 2, 3, 4, 5]
num[0] = 10 //setting index 0 to equal 10
num[1] = 20 //setting index 1 to equal 20
console.log(num)

const myCountries = [
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
  'Kenya'
]

myCountries[0] = 'Afghanistan' //replaced Albania with Afghanistan
let countriesLastIndex = myCountries.length - 1
myCountries[countriesLastIndex] = 'Korea' //replacing Kenya with Korea

console.log(myCountries)

const myArr = Array(10).fill('#')
console.log(myArr)

const myArr2 = Array(20).fill(0)
console.log(myArr2)

const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]
const thirdArray = firstArray.concat(secondArray)
console.log(thirdArray) //[1, 2, 3, 4, 5, 6]

const meat = ['fish', 'pork', 'beef', 'chicken']
const dairy = ['milk', 'cheese', 'yogurt', 'butter']
const shoppingList = meat.concat(dairy)
console.log(shoppingList)

const myNums = [1, 2, 3, 4, 5, 6]
console.log(myNums.indexOf(4))
console.log(myNums.indexOf(1))
console.log(myNums.indexOf(9))
console.log(myNums.indexOf(6))

const myFruit = ['banana', 'orange', 'mango', 'lemon']
let index = myFruit.indexOf('banana')

if(index === -1){
  console.log('This fruit does not exist in the array')
} else {
  console.log('This fruit does exist in the array')
}

let indexOfAvocado = myFruit.indexOf('alvocado')
//Also can use ternary 
indexOfAvocado === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

const numbersArray = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbersArray.lastIndexOf(2))
console.log(numbersArray.lastIndexOf(0)) 
console.log(numbersArray.lastIndexOf(1)) 
console.log(numbersArray.lastIndexOf(4)) 
console.log(numbersArray.lastIndexOf(6))

console.log(numbersArray.includes(5)) 
console.log(numbersArray.includes(0)) 
console.log(numbersArray.includes(1)) 
console.log(numbersArray.includes(6))
console.log(numbersArray.includes(11)) 

const languages = ['JavaScript', 'Java', 'Python', 'C++']
console.log(languages.includes('J')) 

const currentLanguage = 'JavaScript'
console.log(Array.isArray(numbersArray))
console.log(Array.isArray(currentLanguage))

const myNumbers = [1, 2, 3, 4, 5]
console.log(myNumbers.toString())
const languages2 = ['JavaScript', 'Java', 'Python', 'C++']
console.log(languages2.toString())

nums = [1, 2, 3, 4, 5]
console.log(nums.join())
console.log(nums.join(''))
console.log(nums.join(' '))
console.log(nums.join(', '))
console.log(nums.join(' # '))

const myLanguages = ['JavaScript', 'Java', 'Python']
console.log(myLanguages.join(' | '))


console.log(nums.slice(1,3))

const myList = ['Item1', 'Item2', 'Item3']
myList.push('Item4')
console.log(myList)

myList.pop()
console.log(myList)

myList.shift()
console.log(myList)

myList.unshift('Item1.5')
console.log(myList)

myList.reverse()
console.log(myList)

const myWebTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(myWebTechs)
myWebTechs.sort()
console.log(myWebTechs)
myWebTechs.reverse()
console.log(myWebTechs)

const firstNums = [1, 2, 3]
const secondNums = [4, 5, 6]
const arrayOfArray = [[1, 2, 3], [4, 5, 6]]
console.log(arrayOfArray[0])
console.log(arrayOfArray)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])












