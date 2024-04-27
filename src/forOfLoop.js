/*  
 Exercise: 
   Create an array of names and use the for...of loop to print each name in uppercase.
 Sample Input:  
   ["Alice", "Bob", "Charlie"]
 Expected Output:
   ALICE
   BOB
   CHARLIE 
*/

const names = ["Alice", "Bob", "Charlie"]

for (const name of names) {
    console.log(name.toUpperCase());
}

/* 
Exercise:
  Get the sum of all numbers in the array
Sample Input: 
  [1,2,3,4,5]
Expected Output: 
  15
*/

const numbers = [1,2,3,4,5]
let total = 0
for (const number of numbers) {
    total += number;
}
console.log(total);

console.log('ASCII code 64 to string: ', String.fromCharCode(66))