console.log("Day 3")

let firstName
console.log(firstName)

let middleName = null
console.log(middleName)

let lastName = "Smith"

let numOne = 4
let numTwo = 3

let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(5 > 1)              // true, because 5 is greater than 1
console.log(6 >= 3)             // true, because 6 is greater than 3
console.log(4 < 1)              // false,  because 4 is greater than 1
console.log(1 < 4)              // true, because 1 is less than 4
console.log(1 <= 4)             // true, because 1 is less than 4
console.log(5 == 4)             // false, because 5 is not equal to 4
console.log(7 != 4)             // true, because 7 is not equal to 4
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

//&& operator
let logicOper1 = 4 > 3 && 10 > 5  // true && true = true
let logicOper2 = 4 > 3 && 10 < 5  // true && false = false
let logicOper3 = 4 < 3 && 10 < 5  // false && false = false

//|| operator
let logicOper4 = 4 > 3 || 10 > 5  // true || true = true
let logicOper5 = 4 > 3 || 10 < 5  // true || false = true
let logicOper6 = 4 < 3 || 10 < 5  // false || false = false

//! Negation operator 
let logicOper7 = 4 > 3        //true
let logicOper8 = !(4 > 3)     //false
let isLightOn = true          //true
let logicOper9 = !isLightOn   //false
let isMarred = !false         //true

let count = 0
console.log(++count)
console.log(count)

let count1 = 0
console.log(count1++)
console.log(count1)

let count2 = 0 
console.log(--count2)
console.log(count2)

let count3 = 0
console.log(count3--)
console.log(count3)

let isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

isRaining = false
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

//alert("This is an alert message.")
//let number = prompt('Enter number', 'number goes here')
//console.log(number)
//let selection = confirm("Do you agree with the terms and conditions?")
//console.log(selection)

const now = new Date()
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDate())
console.log(now.getSeconds())
console.log(now.getTime())
console.log(now.getDay())












