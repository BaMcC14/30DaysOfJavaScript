//1
const array = []
//2
const myNum = [1, 2, 3, 4, 5, 6]
//3
console.log(myNum.length)
//4
const firstElement = myNum[0]
const middleElement = myNum[parseInt(myNum.length/2)]
const lastElement = myNum.length - 1
console.log('First Element: ', firstElement, 'Middle Element: ', middleElement, 'Last Element: ', lastElement)
//5
const mixedDataTypes = ['Blake', 3.14, 90, true, 'Texas', false]
console.log(mixedDataTypes.length)
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
let first = itCompanies[0]
let midle = itCompanies[parseInt(itCompanies.length/2)]
let last = itCompanies[itCompanies.length - 1]
console.log('First Company: ', first, 'Middle Company: ', midle, 'Last Company: ', last)
//10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
//11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//12
console.log(itCompanies.toString())
//13
let company = 'Microsoft'
if(itCompanies.includes(company)){
  console.log(`${company} is in the list.`)
} else {
  console.log(`${company} is not in the list.`)
}
//14
console.log(itCompanies.sort())
//15
console.log(itCompanies.reverse())
//16
console.log(itCompanies.slice(0,3))
//17
len = itCompanies.length
let lastThree = itCompanies.slice(len - 3, len)
console.log(lastThree)
//18
let mid = itCompanies.slice(parseInt(itCompanies.length/2))
console.log(mid)
//19
itCompanies.shift()
console.log(itCompanies)
//20
itCompanies.splice(parseInt(itCompanies.length/2)-1, 2)
console.log(itCompanies)
//21
itCompanies.pop()
console.log(itCompanies)
//22
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)

//Levle 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const punctuationRemoved = text.replace(/[^\w\s]/gi, '');
console.log(punctuationRemoved)
let textArray = punctuationRemoved.split(/[,\s]+|[\s]/)
console.log(textArray)
let textCount = textArray.length
console.log(textCount)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1)
shoppingCart.splice(shoppingCart.lastIndexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let minAge = ages[0]
console.log(minAge)
let maxAge = ages[ages.length-1]
console.log(maxAge)

let ageLen = ages.length
let median = (ages[parseInt(ageLen/2)-1] + ages[parseInt(ageLen/2)])/2 
console.log(median)

const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/len;
console.log(average)

let range = maxAge - minAge
console.log(range)

Math.abs(minAge-average) < Math.abs(maxAge-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!');
