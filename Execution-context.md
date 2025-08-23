  
# Execution context 

شامل تمام اطلاعاتی است که برای اجرای یک قطعه کد نیاز است، مانند:

<div dir="rtl">


* متغیرها و مقادیر آنها
* توابع قابل دسترس
* scope (حوزه دید)
* تنظیمات محیط اجرا




### در JavaScript
##### در جاوااسکریپت، execution context شامل سه بخش اصلی است:

* Variable Environment: محل ذخیره متغیرها و تعاریف توابع
* Lexical Environment: تعیین می‌کند کدام متغیرها در کجا قابل دسترس هستند
* This Binding: مشخص می‌کند this به چه چیزی اشاره می‌کند

### انواع Execution Context

#### Global Execution Context

* محیط پیش‌فرض که وقتی کد شروع به اجرا می‌شود ایجاد می‌شود
* در مرورگر معمولاً window object است

#### Function Execution Context

* هر بار که تابعی فراخوانی می‌شود، یک execution context جدید ایجاد می‌شود
* شامل پارامترها، متغیرهای محلی و arguments object



### Eval Execution Context

* زمانی که کد داخل eval() اجرا می‌شود

```javascript

var globalVar = 'I am a global variable';

function myFunction() {
    var localVar = 'i am a local variable';
    console.log(globalVar); // قابل دسترس
    console.log(localVar);  // قابل دسترس
}

myFunction();
// console.log(localVar); // خطا - قابل دسترس نیست

```
درک execution context برای فهم نحوه کار scope، hoisting، و closure ها در برنامه‌نویسی بسیار مهم است.


##### بیایید execution context را مثل یک اتاق کار تصور کنیم 🏠
* مثال ساده از زندگی روزمره
فکر کنید شما در خانه‌تان چندین اتاق دارید:

سالن مشترک (مثل Global Context)  
اتاق کار شخصی (مثل Function Context)  

```javascript

// This is like the common living room - everyone can use it
var familyName = "Smith";
var address = "New York";

function fatherOffice() {
    // This is like father's office - only father works here
    var workDocuments = "Engineering";
    var currentProject = "Building website";
    
    console.log(familyName); // ✅ I can see it - from common room
    console.log(workDocuments); // ✅ I can see it - in same room
}

function motherOffice() {
    var workDocuments = "Medicine"; // Different from father's office!
    var todayPatient = "John Doe";
    
    console.log(familyName); // ✅ From common room
    console.log(todayPatient); // ✅ In same room
    // console.log(currentProject); // ❌ Can't see - it's in father's office
}
```


### مراحل ایجاد Execution Context
مرحله 1: Creation Phase (مرحله آماده‌سازی)


```javascript

function goShopping() {
    console.log(shoppingList); // undefined (not error!)
    console.log(money); // undefined
    
    var shoppingList = ["bread", "milk", "eggs"];
    var money = 100;
}

```
##### چه اتفاقی می‌افتد؟

* جاوااسکریپت ابتدا تمام متغیرها را پیدا می‌کند
* جا برایشان رزرو می‌کند ولی مقدار undefined می‌دهد
* بعد کد را خط به خط اجرا می‌کند

### مرحله 2: Execution Phase (مرحله اجرا)
```javascript

function goShopping() {
    console.log(shoppingList); // undefined
    
    var shoppingList = ["bread", "milk", "eggs"];
    console.log(shoppingList); // ["bread", "milk", "eggs"]
    
    var money = 100;
    console.log(money); // 100
}

```

مثال کاملتر با Call Stack
```javascript
// Global environment (like house living room)
var userName = "Mike";

function makeBreakfast() {
    var ingredients = ["eggs", "bread"];
    
    function fryEggs() {
        var oil = "little";
        var heat = "medium";
        
        console.log("Making eggs for: " + userName); // From living room
        console.log("Ingredients: " + ingredients); // From parent function
        console.log("Oil: " + oil); // From this function
        
        return "Eggs ready!";
    }
    
    var result = fryEggs();
    return result;
}

// Execute
console.log(makeBreakfast());
```

Call Stack چگونه کار می‌کند؟

تصور کنید یک پشته بشقاب دارید:

```javascript


Step 1: Program starts
[Global Context] ← at bottom

Step 2: makeBreakfast() is called
[Function: makeBreakfast]
[Global Context]

Step 3: fryEggs() is called  
[Function: fryEggs] ← at top
[Function: makeBreakfast]
[Global Context]

Step 4: fryEggs() finishes
[Function: makeBreakfast] ← returns to top
[Global Context]

Step 5: makeBreakfast() finishes
[Global Context] ← only this remains


```

### Another Practical Example


```javascript

var companyName = "TechCorp";
var budget = 10000;

function developApp() {
    var projectName = "Mobile App";
    var developers = ["Alice", "Bob"];
    
    function writeCode() {
        var linesOfCode = 0;
        var bugs = [];
        
        function fixBug(bugName) {
            var fixTime = "2 hours";
            console.log("Fixing: " + bugName);
            console.log("Project: " + projectName); // Can access
            console.log("Company: " + companyName); // Can access
            console.log("Fix time: " + fixTime); // Can access
            bugs.push(bugName + " - fixed");
        }
        
        // Simulate finding bugs
        fixBug("Login error");
        fixBug("Database connection");
        
        linesOfCode = 1000;
        return "Code completed with " + bugs.length + " bugs fixed";
    }
    
    var codeResult = writeCode();
    console.log(codeResult);
    return projectName + " development completed";
}

// Execute the development process
var finalResult = developApp();
console.log(finalResult);
console.log("Total budget: " + budget);
```

### Variable Access Rules

```javascript
var globalVar = "I'm global";

function outerFunction() {
    var outerVar = "I'm outer";
    
    function innerFunction() {
        var innerVar = "I'm inner";
        
        console.log(globalVar); // ✅ Can access
        console.log(outerVar);  // ✅ Can access  
        console.log(innerVar);  // ✅ Can access
    }
    
    innerFunction();
    
    console.log(globalVar); // ✅ Can access
    console.log(outerVar);  // ✅ Can access
    // console.log(innerVar); // ❌ Cannot access - ReferenceError
}

outerFunction();
console.log(globalVar); // ✅ Can access
// console.log(outerVar); // ❌ Cannot access - ReferenceErrorvar globalVar = "I'm global";

function outerFunction() {
    var outerVar = "I'm outer";
    
    function innerFunction() {
        var innerVar = "I'm inner";
        
        console.log(globalVar); // ✅ Can access
        console.log(outerVar);  // ✅ Can access  
        console.log(innerVar);  // ✅ Can access
    }
    
    innerFunction();
    
    console.log(globalVar); // ✅ Can access
    console.log(outerVar);  // ✅ Can access
    // console.log(innerVar); // ❌ Cannot access - ReferenceError
}

outerFunction();
console.log(globalVar); // ✅ Can access
// console.log(outerVar); // ❌ Cannot access - ReferenceError
```
نکات مهم:

هر تابع اتاق جداگانه دارد - نمی‌توانند مستقیماً وسایل هم را ببینند
سالن مشترک همه جا در دسترس است - متغیرهای global
آخرین که وارد می‌شود، اولین که خارج می‌شود - مثل پشته بشقاب
قبل از اجرا، همه چیز آماده می‌شود - hoisting

این درک به شما کمک می‌کند بفهمید چرا گاهی متغیرها undefined هستند یا چرا بعضی متغیرها قابل دسترس نیستند!

</div>

---

<div dir="rtl"> 
  
## Call Stack مثل چیست؟

مثال 1: پشته کتاب 📚  
وقتی کتاب روی هم می‌چینید:
- آخرین کتابی که می‌گذارید، اولین کتابی است که برمی‌دارید
- نمی‌توانید کتاب وسطی را بدون برداشتن بالایی‌ها بردارید

مثال 2: پشته ظرف 🍽️  
  وقتی ظرف تمیز روی هم می‌چینید:
- آخرین ظرف = اولین ظرف برای استفاده
- باید از بالا شروع کنید

در برنامه‌نویسی:
```javascript

var name = "John";

function first() {
    console.log("Starting first function");
    second(); // فراخوانی تابع دوم
    console.log("Ending first function");
}

function second() {
    console.log("Starting second function");
    third(); // فراخوانی تابع سوم
    console.log("Ending second function");
}

function third() {
    console.log("Starting third function");
    console.log("Ending third function");
}

first(); // شروع

```

Call Stack به این شکل عمل می‌کند:

```bash
Step 1: first() فراخوانی می‌شود
[first] ← بالا
[Global] ← پایین

Step 2: second() فراخوانی می‌شود
[second] ← بالا (جدیدترین)
[first]
[Global] ← پایین

Step 3: third() فراخوانی می‌شود
[third] ← بالا (جدیدترین)
[second]
[first]
[Global] ← پایین

Step 4: third() تمام شد - حذف می‌شود
[second] ← حالا بالا
[first]
[Global]

Step 5: second() تمام شد - حذف می‌شود
[first] ← حالا بالا
[Global]

Step 6: first() تمام شد - حذف می‌شود
[Global] ← فقط این باقی می‌ماند
```

خروجی:
```bash
Starting first function
Starting second function
Starting third function
Ending third function
Ending second function
Ending first function
```

مثال بهتر - مثل آشپزخانه:
```javascript

function cookDinner() {
    console.log("Start cooking dinner");
    
    function boilWater() {
        console.log("Start boiling water");
        console.log("Water is ready");
    }
    
    function cookRice() {
        console.log("Start cooking rice");
        boilWater(); // نیاز به آب جوش
        console.log("Rice is ready");
    }
    
    function prepareSalad() {
        console.log("Start preparing salad");
        console.log("Salad is ready");
    }
    
    cookRice();
    prepareSalad();
    console.log("Dinner is ready!");
}

cookDinner();

```

Call Stack:

```bash

cookDinner starts
  ↓ cookRice starts
    ↓ boilWater starts
    ↓ boilWater ends
  ↓ cookRice ends
  ↓ prepareSalad starts
  ↓ prepareSalad ends
↓ cookDinner ends
```
پس Call Stack = پشته فراخوانی یا انبار فراخوانی تابع‌ها  

LIFO = Last In,  
First Out = آخرین ورودی، اولین خروجی


</div>

