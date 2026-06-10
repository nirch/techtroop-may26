const john = {
  name: "John",
  age: 30,
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

const jane = {
  name: "Jane",
  age: 25,
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

function createPerson(name, age) {
  return {
    name,
    age,
    greet: function () {
      return `Hello, I'm ${this.name}`;
    },
  };
}
