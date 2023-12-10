function arrayChange(num) {
  let findMax = Math.max(...num);
  for (let i = 0; i < num.length; i++) {
    num[i] = findMax;
  }
  return num;
}
const result = arrayChange([1, 2, 3]);
console.log(result);
