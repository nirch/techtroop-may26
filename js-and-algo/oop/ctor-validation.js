
class User {
  constructor(email, age = 18) {
    if (!email || !email.includes("@")) {
      throw new Error("Valid email required");
    }

    if (age < 0 || age > 120) {
      throw new Error("Age must be between 0 and 120");
    }

    this.email = email;
    this.age = age;
    this.createdAt = new Date();
  }

  static isValidEmail(email) {
    return email && email.includes("@");
  }
}

try {
  const user = new User("john@example.com", 25);
  console.log("User created successfully");
} catch (error) {
  console.error(error.message);
}
