For this challenge, loop through the arrays and push a string with the format <br> "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.

```javascript
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

for(let i = 0; i<=2;i++){
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}
console.log(bios)

```
