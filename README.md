# Advance JavaScript
## Table Of Contents

- [foreach](#🔵foreach)
- [Map](#amp)
- [Filter](#Filter)
- [polymorphism](#polymorphism)




## 🔵 foreach

<div dir="rtl">
  تابع forEach در جاوااسکریپت یکی از متدهای آرایه‌ها (Array) است که برای پیمایش اعضای آرایه استفاده می‌شود. این تابع برای هر عنصر آرایه یک بار اجرا می‌شود و معمولاً برای انجام یک عملیات روی هر عنصر بدون بازگرداندن مقدار استفاده می‌شود (برخلاف map که مقدار جدیدی برمی‌گرداند).


برخلاف حلقه for یا while، کد ما تمیزتر و خواناتر می‌شه.
ساختار کلی:

</div>

```javascript
array.forEach(function(currentValue, index, array) {
  // کدی که باید روی هر عنصر اجرا شود
});

```
### توضیح ورودی‌ها (پارامترهای تابع):
توجه داشته باشید که پارامتر ها ترتیب دارند و از چپ به راست طبق روال زیر ترتیب آنها باید رعایت شود
#### 1. currentValue (اجباری)
* مقدار فعلی از آرایه که در حال پیمایش است.
```javascript
[10, 20, 30].forEach(function(item) {
  console.log(item);
});
// خروجی: 10  20  3

```
#### 2. index (اختیاری)
* اندیس (شماره) عنصر فعلی در آرایه.





```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(item, index) {
  console.log(item, index);
});

```
#### 3. array (اختیاری)
* خود آرایه‌ای که forEach روی آن صدا زده شده.

```javascript
const numbers = [10, 20];
numbers.forEach((item, index, arr) =>
  console.log("index:", index, " value:", item, "  Array:", arr)
);

//index: 0  value: 10   Array: [ 10, 20 ]
//index: 1  value: 20   Array: [ 10, 20 ]

```


* مثال ساده چاپ آیتم های آرایه

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// apple
//banana
//cherry

  ```

 * استفاده از Arrow Function
 ```javascript

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index, arr) => {
  console.log(`${index}: ${fruit} | The Full Array: ${arr}`);
});
// 0: apple | The Full Array: apple,banana,cherry
// 1: banana | The Full Array: apple,banana,cherry
// 2: cherry | The Full Array: apple,banana,cherry


```
مثال با index array


* نکته مهم: forEach break نداره!
<div dir="rtl">
   
`forEach` فقط روی آرایه‌ها کار می‌کنه.
برای آبجکت باید از `Object.keys()` یا `for...in` استفاده کنی

</div>
 
```javascript
const person = { name: 'Ali', age: 25 };

Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});


```

* کاربرد واقعی: مجموع مقادیر
```javascript
let total = 0;
const prices = [10, 20, 30];

prices.forEach(price => {
  total += price;
});

console.log('Total:', total);

//Total: 60
```

```javascript
array = [1, 2, 3];
array.forEach((item, index) => (array[index] = item * -1));
console.log(array);

//[-1,-2,-3]

```


`forEach:` فقط برای اجرا کردن کاری روی هر عنصره. چیزی برنمی‌گردونه.

`map:` یه آرایه جدید می‌سازه.

```javascript
const doubled = prices.map(p => p * 2); // برمی‌گردونه  
prices.forEach(p => p * 2); // چیزی برنمی‌گردونه
```

### 🎯 جمع بندی

* forEach خیلی برای کارهای ساده روی آرایه‌ها مفیده

* خوانا، تمیز، ولی بدون قابلیت break.

* فقط برای آرایه‌هاست.

* از Arrow function می‌تونی استفاده کنی.

---
## 🔵 Map
<div dir="rtl">
  
<li> map() یک متد آرایه </li>

<li> روی هر عنصر آرایه، یک تابع callback اجرا می‌کنه </li>

<li> نتیجه‌ها رو به شکل یک آرایه جدید برمی‌گردونه </li>

<li> آرایه اصلی رو تغییر نمی‌ده </li>
</div>

<br>

```javascript

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]

```

<br>

* ساختار کلی
```javascript

array.map(function(item, index, array) {
  //code block taht repeat on every array item
});
```

* item → مقدار فعلی

* index → شماره ایندکس عنصر

* array → خود آرایه اصلی
<br>

 مثال با استفاده از index:

```javascript

console.log(
["a", "b", "c"].map((el, i) => `${i}: ${el}`)
);

// ["0: a", "1: b", "2: c"]

```
همانطور که میبینید خروجی را در یک آرایه جدید نمایش میده
و درواقع هر خانه آرایه رو که پیمایش میکنه همزمان تابع را اجرا میکنه و اون خانه ای که پیمایش شده را بعد از اجرای تابع به آرایه جدید اضافه میکند

* مثال کاربردی با آبجکت‌ها
  «خیلی وقتا برای استخراج یک ویژگی خاص از لیست آبجکت‌ها استفاده می‌کنیم.»
```javascript
const users = [
  { name: 'Ali', age: 25 },
  { name: 'Sara', age: 30 }
];

const names = users.map(user => user.name);
console.log(names); // ["Ali", "Sara"]
```
<br>

* Chain
  
«چون map() خروجی یک آرایه می‌ده، می‌تونیم مستقیم متدهای دیگه رو زنجیره کنیم.»
```javascript
const result = [1, 2, 3, 4]
  .map(n => n * 2)
  .filter(n => n > 4);

console.log(result); // [6, 8]

```

اگه نمی‌خوای خروجی جدید داشته باشی و فقط می‌خوای روی داده‌ها بگردی، forEach بهتره. ولی اگه نیاز به یک آرایه تغییر‌یافته داری، map() انتخاب درسته.»
```javascript
const arr = [1, 2, 3];

// forEach فقط میچرخه، خروجی نمی‌ده
arr.forEach(num => num * 2); // undefined

// map خروجی می‌ده
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

```
«پس خلاصه: map() یک آرایه جدید می‌سازه، آرایه اصلی رو دست نمی‌زنه، و برای تغییر ساختار داده‌ها عالیه. »

---

<br>

## 🔵 Filter

<div dir="rtl">
  
 متد filter() تو جاوااسکریپت وقتی به درد می‌خوره که بخوای از یک آرایه فقط اون آیتم‌هایی رو نگه داری که یک شرط خاص رو پاس می‌کنن. filter() روی هر عنصر یک تابع اجرا می‌کنه. اگه خروجی اون تابع true باشه، اون عنصر توی آرایهٔ جدید می‌مونه، اگه false باشه حذف میشه.

</div>

```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]
console.log(numbers); // [1, 2, 3, 4]

```

---
* ساختار کلی
* «مثل map، سه پارامتر به تابع filter داده میشه: مقدار عنصر، ایندکس، و خود آرایه.»

```javascript
array.filter(function(element, index, array) {
  return condition;
});

```


```javasctipt
['apple', 'banana', 'avocado']
  .filter((fruit, i) => fruit.startsWith('a'));
// ["apple", "avocado"]

```
* فیلتر کردن آبجکت


<div dir="rtl">
  
filter() برای فیلتر کردن آبجکت‌ها بر اساس یک ویژگی خاص فوق‌العاده‌ست.

</div>

## 🔵 Reduce







