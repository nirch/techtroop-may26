
class Person {
  // name is private property (can only access inside)
  #name;
  
  constructor(name, age, isMale = false) {
    this.#name = name;
    this.age = age;
    this.isMale = isMale;
  }

  greet() {
    return `Hello, I'm ${this.#name}`;
  }

  haveBirthday() {
    this.age++;
    return `Happy Birthday! I'm now ${this.age} yeasrs old`
  }

  get displayPerson() {
    return `${this.#name} (${this.age} years old)`
  }

  static createAnonymous() {
    return new Person("John Doe", 40);
  }

 }


const john = new Person("John", 30, true);
const jane = new Person("Jane", 20);

console.log(john.displayPerson);

// john.#name = "Mike";     // SyntaxError (cannot access private prop)


console.log(john);
console.log(jane);
console.log(jane.greet());
console.log(john.haveBirthday());

const anonymous = Person.createAnonymous();



class Teacher extends Person {
  constructor(name, age, subject, salary, isMale = false) {
    super(name, age, isMale);
    this.subject = subject;
    this.salary = salary;
  }

  greet() {
    return "I am a teacher!";
  }
}

class Student extends Person {
  constructor(name, age, studentId, isMale = false) {
    super(name, age, isMale);
    this.grades = [];
    this.studentId = studentId;
  }

  greet() {
    return `${super.greet()}, student Id: ${this.studentId}`;
  }
}

const teacher = new Teacher("Mrs. Smith", 55, "Math", 50000);
const student = new Student("Bob", 16, "s123", true);
console.log(teacher.haveBirthday());
console.log(student.greet());


// Polymorphism
const people = [teacher, student, jane];
for (const person of people) {
  console.log(person.greet());
}
