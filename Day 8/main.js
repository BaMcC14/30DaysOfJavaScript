console.log('Day 8')

a = 'JavaScript'; //Global Scope can be found anywhere in this file
b = 10; //Global Scope can be found anywhere in this file
function learningScope(){
  console.log(a,b) //JavaScript 10
  if(true){
    let a = 'Python'; //variables declared inside the function will not be accessable. 
    let b = 100
    console.log(a, b); 
  }
}
console.log(a, b); //JavaScript 10
learningScope(); //Python 100

//Function Scope
function learnScope(){
  var gravity = 9.81
  console.log(gravity)
}
learnScope();
//console.log(gravity); //uncaught referenceError gravity is not defined.

if(true){
  var gravity = 9.81;
  console.log(gravity);
}
console.log(gravity);

for(var i = 0; i < 3; i++){
  console.log(i) //0 1 2 
}
console.log(i) //3

function letsLearnScope(){
  const gravity = 9.81;
  console.log(gravity);
}
console.log(gravity) //9.81
letsLearnScope(); //9.81

if(true){
  const gravity = 9.81;
  console.log(gravity);
}
for(let i = 0; i < 3; i++){
  console.log(i);//0 1 2
}
console.log(i);//3 

//Creating an empty object
//const person = {};

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) //{length: 20, width: 20}

const person = {
  firstName: 'Blake',
  lastName: 'M',
  age: 30,
  country: 'United States',
  city: 'Hollywood',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'Python',
    'SQL'
  ],
  isMarried: true,
getFullName: function(){
  return `${this.firstName} ${this.lastName}`
},
'phone number' : '123456789'
}
console.log(person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.state)// undefined

console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['state']); // undefined
console.log(person['phone number'])// good for words with spaces

person.title = 'Student'
person.college = 'Purdue Global';
person.fieldOfStudy = 'Information Technology'
person.skills.push('T-SQL')

person.getPersonInfo = function(){
  let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length -1).join(', ')
  let lastSkill = this.skills.splice(0, this.skills.length -1)[0]
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}. \nHe live in the ${this.country}.`
  return statement;
}

console.log(person)
console.log(person.getPersonInfo())

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keys = Object.keys(copyPerson)
console.log(keys)

const value = Object.values(copyPerson);
console.log(value);

const allKeysValues = Object.entries(copyPerson);
console.log(allKeysValues);

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('weight'))
console.log(copyPerson.hasOwnProperty('age'))

























