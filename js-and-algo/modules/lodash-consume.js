const _ = require('lodash');

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 }
];

const grouped = _.groupBy(users, 'age');

console.log(grouped);