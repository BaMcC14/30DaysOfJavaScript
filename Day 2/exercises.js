console.log("Day 2 Exercises:")

let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.slice(3,challenge.length - 1))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let software ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(software.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a', 11, challenge.length -1))
console.log(challenge.lastIndexOf('a'))
let number17 = 'You cannot end a sentence with because because because is a conjunction'
console.log(number17.indexOf('because'))
console.log(number17.lastIndexOf('because'))
console.log(number17.search('because'))
let challenge2 = ' 30 Days Of JavaScript '
console.log(challenge2.trim())
console.log(challenge.startsWith('30 Days'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/g))
let stringOne = '30 Days of'
let stringTwo = 'JavaScript'
console.log(stringOne.concat(' ' + stringTwo))
console.log(challenge.repeat(2))

console.log('Level 2')

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

let num = '10'
num = parseInt(num)
console.log(typeof(num) == typeof(10))

let parseFloat = '9.8'
console.log(typeof(parseFloat))
parseFloat = parseInt(parseFloat)
console.log(typeof(parseFloat) == typeof(10))

let nameOne = 'python andjargon'

console.log(nameOne.match(/on/g))

let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.match('jargon'))

console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))

let myString = 'JavaScript'
let randomNum = Math.floor(Math.random() * myString.length)
console.log(myString[randomNum])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

console.log(number17.slice(30, 54))

let longSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(longSentence.match(/love/g))

console.log(number17.match(/because/g))


const mySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(mySentence.replace(/[%$@#&;!]/g, ''))

let employee = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = (employee.slice(8,13))
let intSalaryTotal = parseInt(salary) * 12

let annualBonus = (employee.slice(42,47))
let intAnnualBonus = parseInt(annualBonus)

let additionalIncome = (employee.slice(67, 72))
let intAdditionalIncome = parseInt(additionalIncome) * 12

console.log(intSalaryTotal + intAnnualBonus + intAdditionalIncome)


