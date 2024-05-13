/*
Exercise: 
  Use .reduce to find the maximum number in an array.
Sample Input: 
  [2, 99, 50, 60, 5]
Expected Output: 
  99 
*/

const numbers = [2, 99, 50, 60, 5]

// const sum = numbers.reduce((total, currentValue) => {
//   total += currentValue
//   return total
// }, 0);


// console.log(sum)

// Desired Behavior:
// 1. 1st loop: maximumValue = 0, currentValue = 2
//    - function:
//       - maximumValue = currentValue
//       - return maximumValue
// 2. 2nd loop: maximumValue = 2, currentValue = 99
//    - function:
//       - maximumValue = currentValue
//       - return maximumValue
// 3. 3rd loop: maximumValue = 99, currentValue = 50
//    - function:
//       - if (maximumValue < currentValue) {
//        - maximumValue = currentValue
//        }
//        - return maximumValue
// 4. 4th loop: maximumValue = 99, currentValue = 60
//    - function:
//       - if (maximumValue < currentValue) {
//        - maximumValue = currentValue
//        }
//        - return maximumValue
// 5. 5th loop: maximumValue = 99, currentValue = 5
//    - function:
//       - if (maximumValue < currentValue) {
//        - maximumValue = currentValue
//        }
//        - return maximumValue
const max_value = numbers.reduce((maximumValue, currentValue) => {
  if (maximumValue < currentValue) {
    maximumValue = currentValue
  }

  return maximumValue
}, 0)

console.log(max_value)