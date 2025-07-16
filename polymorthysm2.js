// گام 1: به‌روزرسانی کلاس‌ها با متد accessPage()
class User {
  login() {
    console.log("Logging in...");
  }

  accessPage() {
    console.log("Accessing default page...");
  }
}

//👤 Guest

class Guest extends User {
  login() {
    console.log("Guest cannot log in. Please register.");
  }

  accessPage() {
    console.log("Access to Home Page only.");
  }
}

//👤 RegularUser
class RegularUser extends User {
  login() {
    console.log("Welcome back, regular user!");
  }

  accessPage() {
    console.log("Access to User Dashboard.");
  }
}

//👤 Admin
class Admin extends User {
  login() {
    console.log("Welcome Admin! Redirecting to admin dashboard...");
  }

  accessPage() {
    console.log("Full Access to Admin Panel.");
  }
}

//🧪 تست رفتار کاربران:

const users = [new Guest(), new RegularUser(), new Admin()];

users.forEach((user) => {
  user.login();
  user.accessPage();
  console.log("-----------");
});
