const a = [1, 1, 6, 888, 67867, 8666];
const b = [2, 2, 4, 4, 55, 66345, 1231231, 4, 534, 43, 5];

function myFunction(a, b) {
  return a.concat(b).sort((a, b) => a - b);
}
console.log(myFunction(a, b));
