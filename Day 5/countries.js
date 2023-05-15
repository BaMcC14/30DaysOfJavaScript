const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

if(countries.indexOf('Ethiopia') == true){
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

let first10Countries = countries.slice(0, 10);
console.log(first10Countries);

if (countries.length % 2 === 0){
  let firstMid = (countries.length)/2 -1;
  let secondMid = (countries.length)/2;
  console.log(countries[firstMid], countries[secondMid]);
} else console.log(countries[parseInt(countries.length/2)-1]);

countries.shift();

let firstHalf = countries.splice(0,countries.length/2);
let anotherHalf = countries.splice(0, countries.length);
console.log(anotherHalf);