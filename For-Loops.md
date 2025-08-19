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


## For..in


مثال: برنامه ای بنویسید که یک آبجکت را پیمایش کند اگر کلیدی با نام `foundNum` وجود داشت مقدار متغیر `found` را به ۱ تغییر دهد


```javascript
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for(let item in checkObj){
  if(item == 'foundNum'){
    found = 1
  }
}

```
