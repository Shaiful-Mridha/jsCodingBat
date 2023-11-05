// middleWay
// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples

// middleWay([1, 2, 3], [4, 5, 6]) → 2,5
// middleWay([7, 7, 7], [3, 8, 0]) → 7,8
function middleWay(a, b) {
  var array = [];
  array.push(a[a.length - 2]);
  array.push(b[b.length - 2]);
  return array;
}
