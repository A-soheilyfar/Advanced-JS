# Advance JavaScript
##Table Of Contents
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


🔵 Reduce


