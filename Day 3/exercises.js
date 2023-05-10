//1
let firstName1 = "Leonardo"
let lastName1 = "DiCaprio"
let country = "united states"
let city = "Los Angeles"
let age = 48
let isMarried = false
//let year = 1974

console.log(typeof(firstName1))
console.log(typeof(lastName1))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
//console.log(typeof(year))

//2
console.log('10' == 10)
console.log(parseInt('9.8') == 10)

//3 Truthy values
console.log('0' == 0)
console.log(9 > 4)
let myString = "This is a string"
console.log(myString.length > 5)

//4 Falsy values
console.log('0' === 0)
console.log(9 < 4)
console.log(myString.length < 5)

//5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//6
let python = 'python'
let jargon = 'jargon'
console.log(python.length != jargon.length)

//7
console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//false
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))

//8
const newNow = new Date()
console.log(newNow.getFullYear())
console.log(newNow.getMonth())
console.log(newNow.getDate())
console.log(newNow.getDay())
console.log(newNow.getHours())
console.log(newNow.getMinutes())
console.log(newNow.getTime())


//9
//let base = prompt("Enter base:")
//let height = prompt("Enter height")

//let area = 0.5 * base * height
//console.log(area)
//10
//let a = prompt("Enter side A:")
//let b = prompt("Enter side B:")
//let c = prompt("Enter side C:")
//console.log()

//let perimeter = parseInt(a) + parseInt(b) + parseInt(c)
//console.log(perimeter)
//11
//let length = prompt("Enter length:")
//let width = prompt("Enter width:")

//let area = parseInt(length) * parseInt(width)
//let perimeter = 2 * (parseInt(length) + parseInt(width))

//console.log(area)
//console.log(perimeter)


//12
//let radius = prompt("Enter radius:")
//let area = (Math.PI * radius * radius)
//let circumference = (2 * Math.PI * radius)

//console.log(area)
//console.log(circumference)

//13
let x_intercept = 1
let y_intercept = -2
let slope1 = 2;
let slope2 = (10-2)/(6-2)

slope2 > slope1 ? console.log("Slope2 is bigger") : console.log("Slope1 is bigger")
let x = 1
let y = x**2 + 6*x + 3**2;
if(y == 0 ) console.log("y = 0 at x = ", x)

x = -3;
y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

//14
//let hours = parseFloat(prompt("Enter hours:"))
//let rate = parseFloat(prompt("Enter rate:"))
//let earnings = hours * rate
//console.log("Your weekly earnings are " + earnings)

//15

//let name = prompt("Enter your name:")
//lenName = name.length
//if(lenName > 7){
//  console.log("Your name is long")
//}
//else{
//  console.log("Your name is short")
//}

//console.log("my name is shorter than seven digits: ", "blake mccann".length < 7)

//let myage = 30
//let yourAge = prompt("Enter your age.")
//console.log(`I am ${myage - yourAge} years older than you` )


//let birthYear = parseInt(prompt("Enter your birth year: "))
//let age2 = newNow.getFullYear() - parseInt(birthYear)
//age2 > 18 ? console.log(`You are ${age2} and old enough to drive`): console.log(`You are ${age2} you are not old enogh to drive`)

//let yearsToLive = parseInt(prompt("Enter number of years you live: ")) 
//console.log(`You lived ${yearsToLive * 31536000} seconds!`)

let min = newNow.getMinutes() 
let hours = newNow.getHours()
let year = newNow.getFullYear()
let month = newNow.getMonth()
let date = newNow.getDate()


console.log(`${year}-${month + 1}-${date} ${hours}:${min}`)
console.log(`${date}-${month + 1}-${year} ${hours}:${min}`)
console.log(`${date}/${month + 1}/${year} ${hours}:${min}`)

let mins = newNow.getMinutes()
mins < 10 ? '0' + mins.toString(): mins
let hrs = newNow.getHours()
hrs < 10 ? '0' + hrs.toString(): hrs

console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`)




