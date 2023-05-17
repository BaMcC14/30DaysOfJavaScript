console.log('Day 6')

for(let i = 0; i <= 5; i++){
  console.log(i)
}
//prints 0-5
console.log('0 to 5')
for(let i = 5; i >= 0; i--){
  console.log(i)
}
console.log('5 to 0')

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []; 
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
console.log(sum)

const number = [1, 2, 3, 4, 5];
const newArray = []
let sum1 = 0
for(let i = 0; i < number.length; i++){
  newArray.push(number[i] ** 2)
}
console.log(newArray)

//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr2 = []
for(let i = 0; i < countries.length; i++){
  newArr2.push(countries[i].toUpperCase())
}
console.log(newArr2)

let i = 0;
while(i <= 5){
  console.log(i)
  i++
}

let j = 0;
do{
  console.log(j)
  j++
} while (j <= 6)

const myNums = [1, 2, 3, 4, 5]
for(const num of myNums){
  console.log(num)
}

for(const num of myNums){
  console.log(num * num)
}

let mySum = 0
for(const num of myNums){
  mySum += num
}
console.log(mySum)

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
for(tech of webTechs){
  console.log(tech.toUpperCase())
}

for(tech of webTechs){
  console.log(tech[0])
}

const myCountries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const myArr = []
for(const country of myCountries){
  myArr.push(country.toUpperCase())
}
console.log(newArr)

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}


for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}





