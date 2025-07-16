//1: تعریف کلاس پایه (User)
class User {
  login() {
    console.log("Logging in...");
  }
}

//و متد لاگین OVERRIDE گام 2: ساخت کلاس‌های فرزند با

class Guest extends User {
  login() {
    console.log("Guest cannot log in. Please register.");
  }
}

class RegularUser extends User {
  login() {
    console.log("Welcome back, regular user!");
  }
}

class Admin extends User {
  login() {
    console.log("Welcome Admin! Redirecting to admin dashboard...");
  }
}
// گام سوم استفاده از چند ریختی

const users = [new Guest(), new RegularUser(), new Admin()];

users.forEach((user) => {
  user.login(); // یک متد، رفتارهای متفاوت
});
