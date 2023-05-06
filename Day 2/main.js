let word = 'JavaScript'
word[0] = 'J'

console.log(word)
//The word variable is not changed in this example.

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) //true

let js = "JavaScript"
let py = "Python"
console.log(js == py) //false

let lightOn = true
let lightOff = false 
console.log(lightOn == lightOff) //false

//An array of nums
//let nums = [1,2,3]
//nums[0] = 10
//console.log(nums)
//index 0 (1) was changed to 10 

let nums = [1,2,3] //Non-primitive array 
let numbers = nums

console.log(nums == numbers) //true


//Compairing two non-primitive data types. 
let userOne = {
  name: 'Blake',
  role: 'student',
  country: 'United States'
}

let userTwo = {
  name: 'Blake',
  role: 'student',
  country: 'United States'
}
console.log(userOne == userTwo) //false
//Rule of thumb do not compair non-primitive data types. 

//let userTwo = userOne 
//This would equal true if userTwo wasn't declaired as it is above. 



const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))                
console.log(Math.round(9.81))              
console.log(Math.floor(PI))                
console.log(Math.ceil(PI))                 
console.log(Math.min(-5, 3, 20, 4, 5, 10)) 
console.log(Math.max(-5, 3, 20, 4, 5, 10)) 
const randNum = Math.random() 
console.log(randNum)


//creating a random number between 1 and 10

let randomNum = Math.random() //generates a number between 0 and 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen) // this gives number between 0 and 10.999
let randomRoundToFloor = Math.floor(numBtnZeroAndTen) //give a random number between 1 and 10
console.log(randomRoundToFloor)


//Concatening Strings 
//declaring variables 
let numberofPets = 2
let colorOfPet1 = "gray"
let colorOfPet2 = "orange"
let lovesTreats = true
let typeOfPet = "Cats"

console.log("You have " + typeOfPet) 
console.log("One is " + colorOfPet1)
console.log("The other is " + colorOfPet2) 
console.log(numberofPets + " " + typeOfPet + " " + colorOfPet1 + " and " + colorOfPet2) 

//Using the backslash to indicate the string will continue to the next line.
const paragraph = "My name is Blake. I line in Louisiana.\
I am learning JavaScript in a 30DaysOfJavaScript Challenge\
I am also In school learning programming and software development\
Currently I am taking two classes."


//Using a backsliash as an escape sequence. 
console.log('This is the start of a stirng \nThis will start a new line within the string') //backslash n - new line
console.log('Monday\tTuesday\tWednesday\tThursday\tFriday') //backslash t - tab 8 spaces 
console.log("This is how \\ you would insert a backslash in a string")
console.log("This is how \' you would insert a single quote in a stirng")
console.log("This is how \" you would insert a double quote in a stirng")


//Template Literals 
console.log(`The sum of 3 and 4 is 7`) //Statically writing the data
let x = 3
let y = 4
console.log(`The sume of ${x} and ${y} is ${x + y}`)
//writing a template string and adding data within the string.

let firstName = "Tom"
let lastName = "Cruise" 
let fullName = firstName + ' ' + lastName
let country = "United States"
let city = "Hollywood"
let profession = "Actor"
let age  = 60

let personInfoOne = `${fullName} is an ${profession} who is ${age}`
let personInfoTwo = `${fullName} lives in the ${country} in ${city}`

console.log(personInfoOne)
console.log(personInfoTwo)

let a = 10 
let b = 14
console.log(`${a} is greater than ${b} : ${a > b}`)
console.log(`${b} is greater than ${a} : ${b > a}`)

//String indexes
let string = 'JavaScript'
let firstLetter = string[0] //count starts at 0
console.log(firstLetter)    // J

let lastIndex = string.length - 1
console.log(lastIndex)     //9
console.log(string[lastIndex]) // t

let myString = 'jAvAsCrIpT'
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

let newString = 'JavaScript'
console.log(newString.substr(4,6))

let thisstring = 'JavaScript'
  console.log(string.substring(0,4))

let longString = 'This is a 30 days of JavaScript challenge'
console.log(longString.split(' '))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split())
console.log(countries.split(', '))

let myName = '  Blake McCann          '
console.log(myName.trim())

let codeString = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let codeString2 = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex2 = codeString2.length - 1
console.log(string.charAt(lastIndex)) // t

let bigCity = 'New Orleans'
console.log(bigCity.charCodeAt(4))  // O = 79

let JSString = '30 Days Of JavaScript'
console.log(JSString.indexOf('D'))          // 3
console.log(JSString.indexOf('Days'))       // 3
console.log(JSString.indexOf('days'))       // -1

let stateString = 'I live in Louisiana. A lot of people live in Louisiana'
  console.log(stateString.lastIndexOf('live')) //37
  console.log(stateString.lastIndexOf('Lou'))  //45
  console.log(stateString.lastIndexOf('Texas'))//-1

let challengeString = '30'
console.log(challengeString.concat('Days', 'of', 'JavaScript')) // 30DaysOfJavaScript

let longerString = 'Learning to program is fun.'
console.log(longerString.startsWith('Learning'))   //true
console.log(longerString.startsWith('Lea'))        //true
console.log(longerString.startsWith('fun'))        //false

//endsWith()
console.log(longerString.endsWith('.'))            //true
console.log(longerString.endsWith('fun.'))         //true
console.log(longerString.endsWith('Learning'))     //false

let searchString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
  console.log(searchString.search('love'))          // 2  - starts at index 2
  console.log(searchString.search(/javascript/gi))  // 7  - starts at index 7

  let matchString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
  console.log(matchString.match('love'))  


  let repeatString = 'JavaScript'
  console.log(repeatString.repeat(5))














  