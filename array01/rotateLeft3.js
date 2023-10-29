// rotateLeft3
// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// Examples

// rotateLeft3([1, 2, 3]) → 2,3,1
// rotateLeft3([5, 11, 9]) → 11,9,5
// rotateLeft3([7, 0, 0]) → 0,0,7

function rotateLeft3(nums) {
  const array = [];
  for (var i = 1; i < nums.length; i++) {
    array.push(nums[i]);
  }
  array.push(nums[0]);
  return array;
}
console.log(rotateLeft3([1, 2, 3]));
