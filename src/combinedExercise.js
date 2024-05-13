/*
Exercise: 
  Given an array of objects where each object represents a person with properties name and age, use .map, .forEach, or .reduce to solve various tasks.
Sample Input: 
  [ 
    { 
      name: "Alice", 
      age: 25 
    }, 
    { 
      name: "Bob", 
      age: 22 
    }, 
    { 
      name: "Charlie", 
      age: 28 
    } 
  ]
Expected Output: 
  Names: ["Alice", "Bob", "Charlie"]
  Average Age: 25
*/

const persons = [
  {
    name: "Alice",
    age: 25
  },
  {
    name: "Bob",
    age: 22
  },
  {
    name: "Charlie",
    age: 28
  }
]

const names = persons.map(person => {
  return person.name
});

console.log('Names: ', names)

const total_age = persons.reduce((total_age, person) => {
  return total_age += person.age
}, 0)

const average_age = total_age / persons.length

console.log('Average Age: ', average_age)