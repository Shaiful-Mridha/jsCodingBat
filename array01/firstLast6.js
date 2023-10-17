// Array-1 -- firstLast6
// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(nums) {
  const ppp = nums.length - 1;
  if (nums[0] === 6 || nums[ppp] === 6) {
    return true;
  } else {
    return false;
  }
}
console.log(firstLast6([1, 2, 6]));
