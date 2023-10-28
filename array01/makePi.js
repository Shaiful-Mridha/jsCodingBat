// makePi
// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

// Examples

// makePi() → 3,1,4

function makePi() {
  const pi = Math.PI.toFixed(15);
  const three = pi.replace(".", "").substring(0, 3);
  return Array.from(three, Number);
}
console.log(makePi(3.1416));
