/*
Exercise: 
  Start with an array of numbers. Use .forEach to calculate the sum of all numbers in the array.
Sample Input: 
  [10, 20, 30, 40, 50]
Expected Output:
  150
*/
// const numbers = [10,20,30,40,50]
// let total = 0
// let i =0
// numbers.forEach((number)=> {
//   total += number;
//   console.log(number)
// });

// console.log(total);

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

const names = ["Alice", "Bob", "Charlie"]

names.forEach((name) => {
  console.log(name.toUpperCase());
});