# Destructuring
یک عبارت (expresion) جاوا اسکریپته که امکان تجزیه مقادیر از آرایه‌ها یا ویژگی‌های اشیاء (Object) را به متغیرهای مجزا فراهم می‌کند.
داده‌ها را می‌توان از آرایه‌ها، اشیاء و اشیاء تو در تو (Nested Objects) استخراج کرد و به متغیرها اختصاص داد.


### Array Destructuring
اعضای آرایه را می‌توان در متغیرهای مختلف باز (Unpack) کرد. در ادامه مثال‌های مختلفی براتون میارم تا به خوبی مبحث رو یادبگیرید

Example 1
```javascript
const arr = ["A", "B", "C", "D"];
const [first, second, , fourth] = arr;

console.log(first, fourth, second);
//output
//A D B
```

برای destructing  در آرایه نباید از کوتیشن استفاده کرد <br>
اگر تعداد متغیر ها از تعداد اعضای آرایه کمتر باشه فقط تا اون مقداری که اختصاص میده آرایه پیمایش میشه <br>
اگر تعداد متغیر ها از تعداد اعضای آرایه بیشتر باشه به اون متغیر اضافه undefined اختصاص داده میشه <br>

Example 2
```javascript
const people = ["Raha", "Shahriar", "Toranj", "Taranom"];
const [first, , ...rest] = people;

console.log(rest);

// Output
// [ 'Toranj', 'Taranom' ]


const [first, ...rest,item] = people;
console.log(rest)

// Output
// ERROR
// rest باید آخرین المان باشد وگرنه ارور دریافت میکنیم
```
Example 3

```javascript
let tall = "Aboozar";
let short = "Abolfazl";

[short, tall] = [tall, short];
console.log(tall);
console.log(short);

//Output:

//Abolfazl
//Aboozar
```

### Object_Destructing
تجزیه ساده شیء: در مثال زیر، ویژگی‌ها (و مقادیر آنها) از یک شیء (Object) به متغیرها اختصاص داده می‌شوند.
Example 1
let myob = { x: 21, y: 40, t: 50 };
const { x, y, t } = myob;
console.log(t);
//Output :
//50

دقت کنید که نام متغیر جدید با نام کلید هر ویژگی آبجکت یکسان باشه

Example 2
```javascript
const { a, b } = { a: "Raha", b: "Abolfazl" };
console.log(a);

//Output: Raha
```

Example 3
```javascript

const { x, y, ...children } = {
  x: "Raha",
  y: "Abolfazl",
  t: "Shahriar",
  s: "Taranom",
  z: "Toranj",
};
console.log(children);

//Output:
//{ t: 'Shahriar', s: 'Taranom', z: 'Toranj' }
```

// Example 4
// const { kind, beutiful } = { kind: true, beutiful: true };
// console.log(beutiful);

// Example 5
// const {person: { name, age }} = { person: { name: "abolfazl", age: 26 } };
// console.log(name);

// Example 6
// const {
//   person,
//   person: { tt, age },
// } = { person: { tt: "abolfazl", age: 26 } };

// console.log(person); // { name: "abolfazl", age: 26 }
// console.log(tt); // "abolfazl"

// Example 7
// const people = {
//   man: { name: "Abolfazl", age: 26 },
//   woman: { name: "Raha", age: 25 },
// };

// Example 8
// const {
//   man,
//   man: { name: manName, age: manAge },
//   woman,
//   woman: { name: womanName, age: womanage },
// } = people;

// console.log(woman);

// Example 9
// let obj = {
//   name: "GFG",
//   add: {
//     country: "India",
//     state: {
//       code: "JS",
//       pincode: "820800",
//       article: {
//         topic: "destructuring",
//       },
//     },
//   },
// };

// let { name } = obj;
// console.log(name);

// let {
//   add,
//   add: { country: abcd },
// } = obj;
// console.log(add);

// let {
//   state,
//   add: {
//     state: { code: cd },
//   },
// } = obj;
// console.log(cd);

// let {
//   article,
//   add: {
//     state: {
//       article: { topic: ef },
//     },
//   },
// } = obj;
// console.log(ef);

//Example 10

const person = {
  name: "Abolfazl",
  age: 26,
  job: "programmer",
  sayHello: function (name = person.name) {
    console.log(`Hello ${name}`);
  },
};

const { name, age, job, sayHello } = person;
sayHello();
