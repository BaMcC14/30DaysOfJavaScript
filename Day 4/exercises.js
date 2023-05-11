console.log("Day 4 Exercises")
//1
let age = 20//prompt("Enter Your age: ")

if (age >= 18){
  console.log("You are old enough to drive.")
} else {
  console.log(`You have ${18 - age} years until you can drive.`)
}
//2
let myAge = 35
let yourAge = 30//parseInt(prompt("Enter your age"))

if(yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`)
} else {
  console.log(`I am ${myAge - yourAge} years older than you.`)
}
//3
let x = 4
let y = 3
x > y ? console.log(`${x} is greater than ${y}`) : console.log(`${y} is greater than ${x}`)

if(x > y){
  console.log(`${x} is greater than ${y}`)
} else {
  console.log(`${y} is greater than ${x}`)
}

//4
let myNum = 55 //parseInt(prompt("Enter a number: "))

if(myNum % 2 == 0){
  console.log(`${myNum} is an even number`)
} else{
  console.log(`${myNum} is an odd number`)
}

//5

let grade = 88 //parseInt(prompt("Enter a grade: "))

  if(grade >= 80){
    console.log("You have an A")
    } else if(grade >= 70){
    console.log("You have a B")
    } else if(grade >= 60){
      console.log("You have a C")
    } else if(grade >= 50){
     console.log("You have an D") 
    } else{
      console.log("You have an F")
    }
 
  //6
  let checkSeason = "April" //prompt("Enter a Month: ")

  if(checkSeason == 'September' || checkSeason == 'October' || checkSeason == 'November'){
    console.log("It is Autumn")
  } else if(checkSeason == 'December' || checkSeason == 'January' || checkSeason == 'February'){
    console.log("It is Winter")
  } else if(checkSeason == 'March' || checkSeason == 'April' || checkSeason == 'May'){
    console.log("It is Spring")
  } else if(checkSeason == 'June' || checkSeason == 'July' || checkSeason == 'August'){
    console.log("It is Summer")
  }
    
//7
let day = "sunday"
let lowerDay = day.toLowerCase()

switch(lowerDay){
  case "monday":
    console.log('Monday is a work day.')
    break
  case "tuesday":
    console.log('Tuesday is a work day.')
    break
  case "wednesday":
    console.log('Wednesday is a work day.')
    break
  case "thursday":
    console.log('Thursday is a work day.')
    break
  case "friday":
    console.log('Friday is a work day.')
    break
  case "saturday":
    console.log('Saturday is the weekend.')
    break
  case "sunday":
    console.log('Sunday is the weekend.')
    break
  default:
    console.log("Enter a day of the week.")
}

//8

let month = prompt("Enter a month:")
let lowerMonth = month.toLowerCase()

switch(lowerMonth){
  case "january":
    console.log('January has 31 Days.')
    break
  case "february":
    console.log('February has 28 Days.\nUnless its a leap year.')
    break
  case "march":
    console.log('March has 31 Days.')
    break
  case "april":
    console.log('April has 30 Days.')
    break
  case "may":
    console.log('May has 31 Days.')
    break
  case "june":
    console.log('June has 30 Days.')
    break
  case "july":
    console.log('July has 31 Days.')
    break
  case "august":
    console.log('August has 31 Days.')
    break
  case "september":
    console.log('September has 30 Days.')
    break
  case "october":
    console.log('October has 31 Days.')
    break
  case "november":
    console.log('November has 30 Days.')
    break
  case "december":
    console.log('December has 31 Days.')
    break
  default:
    console.log("Enter a Month.")
}



    























