  
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

</div>
