const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

if(webTechs.indexOf('Sass') == true){
  console.log('Sass is a CSS preprocess')
} else{
  webTechs.push('Sass')
  console.log(webTechs)
}

const myFrontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const myBackEnd = ['Node', 'Express', 'MongoDB']

const myFullStack = myFrontEnd.concat(myBackEnd)
console.log(myFullStack)
