/*
Exercise: 
  Use the .map function to create a new array that contains each number from the original array times 2.
Sample Input: [1, 2, 3, 4, 5]
Expected Output: 
  [2, 4, 6, 8, 10]
*/

const numbers = [1, 2, 3, 4, 5]

const new_numbers = numbers.map(number => {
  return number * 2
});

console.log(new_numbers)

// Expected Output: ['Sir Andre', 'Sir Bob', 'Sir Charlie']
const names = ['Andre', 'Bob', 'Charlie'];
const prefix = 'Sir';

const new_names = names.map(name => {
  return prefix + ' ' + name;
});

console.log(new_names);