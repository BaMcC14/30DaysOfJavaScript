//1
console.log('for loop')
for(let i = 0; i <= 10; i++){
  console.log(i)
}

console.log('while loop')
let a = 0;
while(a <= 10){
  console.log(a);
  a++;
}

console.log('do while loop')
let b = 0;
do{
  console.log(b)
  b++
}while(b <= 10);

//2
console.log('for loop')
for(let i = 10; i >= 0; i--){
  console.log(i)
}

console.log('while loop')
let c = 10;
while(c >= 0){
  console.log(c);
  c--;
}

console.log('do while loop')
let d = 10;
do{
  console.log(d)
  d--
}while(d >= 0);

//3
let n = 3
for(let i = 0; i <= n; i++){
  console.log(i)
}

//4
let hash = '#'
for(let i = 0; i <= 7; i++){
  console.log(hash.repeat(i))
}

//5
for(let i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i * i}`)
}

//6
for(let i = 0; i <= 10; i++){
  console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//7
for(let i = 0; i <= 100; i+=2){
  console.log(i)
}

//8
for(let i = 1; i <= 100; i+=2){
  console.log(i)
}

//9
console.log('Prime Numbers:')
for (let num = 0; num <= 100; num++) {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//10
console.log('Sum of all numbers:')
let sum2 = 0;
for(let i = 0; i <= 100; i++){
  sum2 += i
}
console.log(sum2)

//11
console.log('Sum of all even numbers:')
let sum3 = 0;
for(let i = 0; i <= 100; i++){
  if(i % 2 == 0){
    sum3 += i
  }
}
console.log(sum3)

//12
console.log('Sum of all odd numbers:')
let sum4 = 0;
for(let i = 0; i <= 100; i++){
  if(i % 2 != 0){
    sum4 += i
  }
}
console.log(sum4)

//13
console.log('Sum of all odd and even numbers:')
let sumsArr = []
let sumEven = 0
let sumOdd = 0
for(let i = 0; i <= 100; i++){
  if(i % 2 == 0){
    sumEven += i
  } else{
    sumOdd += i
  }
  sumsArr[0] = sumEven
  sumsArr[1] = sumOdd
}
console.log(sumsArr)

//14
//15

let randomNumsArr = [];
for (let i = 0; i < 5; i++) {
   let randomNums = parseInt(Math.PI * Math.random() * 100 + i);
   if(randomNumsArr.indexOf(randomNums) == -1){
    randomNumsArr.push(randomNums)
   }
}
console.log(randomNumsArr)


//16
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let random = []
for(let i = 0; i < 6; i++){
  if(i % 2 == 0) random.push(i);
  else random.push(alphabet[parseInt(Math.random() * 25)])
}
console.log(random)

//17
let alphaNums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
let m = parseInt(Math.random() * alphaNums.length) % 16;
let rands = []
for(let i = 0; i < m; i++){
  rands.push(alphaNums[Math.floor(Math.random() * alphaNums.length) - 1])
}console.log(rands.join(''));

//18
console.log('Generate Hex Number')
let hexNums = '123456789abcdef';
let hexNum = []
for(let i = 0; i < 6; i++){
  hexNum.push(hexNums[parseInt(Math.random() * hexNums.length) - 1])
}
console.log('#' + hexNum.join(''))


//19
let rgb = []
for(char of '123'){
  var red = (parseInt(Math.random() * 255));
  var grn = (parseInt(Math.random() * 255));
  var blu = (parseInt(Math.random() * 255));
  rgb.push(red, grn, blu);
}

console.log(`rgb(${red}, ${grn}, ${blu})`)













