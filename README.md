# Advance JavaScript
##Table Of Contents
- [foreach](#foreach)
- [Map](#amp)
- [Filter](#Filter)
- [polymorphism](#polymorphism)




## 🔵 foreach
<div dir="rtl">
  foreach یه متد مخصوص آرایه‌هاست که به ما اجازه می‌ده روی هر عنصر از آرایه، یک کاری انجام بدیم.
برخلاف حلقه for یا while، کد ما تمیزتر و خواناتر می‌شه.
</div>

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(item, index, array) {
  console.log(item, index);
});

```

* مثال ساده چاپ آیتم های آرایه

```javascript
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach(function(fruit) {
    console.log(fruit);
  });

  ```

 * استفاده از Arrow Function
 ```javascript

fruits.forEach((fruit, index, arr) => {
  console.log(`${index}: ${fruit} | کل آرایه: ${arr}`);
});

```
مثال با index array

```javascript
fruits.forEach((fruit, index, arr) => {
  console.log(`${index}: ${fruit} | کل آرایه: ${arr}`);
});


```
* نکته مهم: forEach break نداره!
 
 * `forEach` فقط روی آرایه‌ها کار می‌کنه. برای آبجکت باید از `Object.keys()` یا `for...in` استفاده کنی.

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

console.log('جمع کل:', total);


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



