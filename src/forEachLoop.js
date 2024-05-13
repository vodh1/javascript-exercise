/*
Exercise: 
  Start with an array of numbers. Use .forEach to calculate the sum of all numbers in the array.
Sample Input: 
  [10, 20, 30, 40, 50]
Expected Output:
  150
*/
/*
 Exercise:
   Create an array of names and use the .forEach loop to print each name in uppercase.
 Sample Input:
   ["Alice", "Bob", "Charlie"]
 Expected Output:
   ALICE
   BOB
   CHARLIE
*/

// const names = ["Alice", "Bob", "Charlie"]

// names.forEach((name) => {
//   console.log(name.toUpperCase());
// });

const numbers = [1, 2, 3, 4, 5]
let totalNumbers = 0

numbers.forEach((number) => {
  totalNumbers += number
});

console.log(totalNumbers)
// Output: 15