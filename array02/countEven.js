// countEvens
// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples

// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0

function countEvens(nums) {
  // Initialize a variable to store the count of even numbers
  let evenCount = 0;

  // Iterate through the array
  for (let num of nums) {
    // Check if the current number is even
    if (num % 2 === 0) {
      // Increment the count if it's even
      evenCount++;
    }
  }

  // Return the final count of even numbers
  return evenCount;
}
