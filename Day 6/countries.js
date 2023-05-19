const countries1 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

let countries2 = []
for(const country of countries1){
  countries2.push(country.toUpperCase());
}
console.log(countries2)

let countryLen = []
for(const country of countries2){
  countryLen.push(country.length)
}
console.log(countryLen)

countryAbb = []
for(country of countries1){
  countryAbb.push(country)
  countryAbb.push(country.slice(0, 3).toUpperCase())
  countryAbb.push(country.length)
}
console.log(countryAbb)

let landArr = []
for(const land of countries1){
  if(land.includes('land')){
    landArr.push(land)
  }
}
console.log(landArr)

let iaArr = []
for(const country of countries1){
  if(country.endsWith('ia'))
    iaArr.push(country);
}
if(iaArr.length > 0){
  for(const each of iaArr)
    console.log(each);
}
  
let endsWith_ia = [];
for (const country of countries) {
   if(country.endsWith('ia'))
      endsWith_ia.push(country);
}
if(endsWith_ia.length > 0) {
   for(const each of endsWith_ia) 
      console.log(each);
}
console.log(iaArr)

let maxCharacters = 0
let maxCountry
for(each of countries1){
  if(each.length > maxCharacters){
    maxCharacters = each.length
    maxCountry = each
  }
}
console.log(maxCountry)

let fiveChar = [];
for(each of countries1){
  if(each.length == 5){
    fiveChar.push(each)
  }
}
console.log(fiveChar)

let countriesCopy = []
for(const country of countries1){
  countriesCopy.push(country)
}
console.log(countriesCopy)

let sortedCountries = countriesCopy.sort();
console.log(sortedCountries)

let twoWords = []
for(const each of countries1){
  if(each.includes(' ')){
    twoWords.push(each)
  }
}
console.log(twoWords)

let reverseCountries = []
for(let i = countries1.length - 1; i >= 0; i--){
  reverseCountries.push(countries1[i])
}
console.log(reverseCountries)





















