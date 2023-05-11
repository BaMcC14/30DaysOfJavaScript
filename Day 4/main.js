console.log("Day 4")

let number = 3 
if(number > 0){
  console.log(`${number} is a positive number.`)
}

let isRaining = true
if (isRaining){
  console.log('Take a rain coat.')
}

let num = 5
if(num > 0){
  console.log(`${num} is a positive number.`)
} else {
  console.log(`${num} is a negative number.`)
}

if(isRaining){
  console.log('Take a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

let a = 0

if(a > 0){
  console.log(`${a} is a positive number.`)
} else if(a == 0){
  console.log(`${a} is 0`)
} else if (a < 0){
  console.log(`${a} is a negative number.`)
} else {
  console.log(`${a} is not a number.`)
}

let weather = 'cloudy'

switch(weather){
  case 'rainy':
    console.log("You will need a rain coat.")
    break
  case 'cloudy':
    console.log("It may be cold, you need a jacket.")
    break
  case 'sunny':
    console.log("Go out and enjoy the sunny weather.")
    break
  default:
    console.log("No need for a rain coat.")
}

//let dayUserInput = prompt('What day is today?')
//let day = dayUserInput.toLowerCase()

//switch (day){
//  case 'monday':
//    console.log('Today is Monday')
//    break
//  case 'tuesday':
//    console.log('Today is Tuesday')
//    break
//  case 'wednesday':
//    console.log('Today is Wednesday')
//    break
//  case 'thursday':
//    console.log('Today is Thursday')
//    break
//  case 'friday':
//    console.log('Today is Friday')
//    break
//  case 'saturday':
//    console.log('Today is Saturday')
//    break
//  case 'sunday':
//    console.log('Today is Sunday')
//    break
//  default:
//    console.log('It is not a week day.')
//}

//let num1 = prompt('Enter number');
//switch (true) {
//  case num1 > 0:
//    console.log('Number is positive');
//    break;
//  case num1 == 0:
//    console.log('Numbers is zero');
//    break;
//  case num1 < 0:
//    console.log('Number is negative');
//    break;
//  default:
//    console.log('Entered value was not a number');
//}


let isSunny = true
isSunny?console.log("It is sunny.") : console.log("It is not sunny.")

4 > 2? console.log("4 is greater than 2") : console.log("4 is not greater than 2")

