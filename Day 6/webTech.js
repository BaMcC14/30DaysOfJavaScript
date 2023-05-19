const webTech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


let maxChar = 0;
let longestWord;
for(each of webTech){
  if(each.length > maxChar){
    maxChar = each.length;
    longestWord = each
  }
}
console.log(longestWord)

let techWithLen = [];
for (const tech of webTech) {
   let len = tech.length;
   let caps = tech.toUpperCase();
   
   techWithLen.push([caps, len])
};
console.log(techWithLen);


const mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for(const tech of mernArray){
  mernStack.push(tech[0])
}
console.log(mernStack.join(''))


for(let i = 0; i <= webTech.length; i++){
  console.log(webTech[i])
}

let fruit = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruit = []
for(let i = fruit.length - 1 ; i >= 0; i--){
  reverseFruit.push(fruit[i])
}
console.log(reverseFruit)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
let myFullStack = []
for(let i = 0; i < fullStack.length; i++){
  myFullStack.push(fullStack[i] )
}
console.log(myFullStack.join(' '))

let sortedWebTech = webTech.sort()
console.log(sortedWebTech)
let sortedMernArray = mernArray.sort()
console.log(sortedMernArray)












