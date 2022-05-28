// def romanToInt(s):
//         translations = {
//             "I": 1,
//             "V": 5,
//             "X": 10,
//             "L": 50,
//             "C": 100,
//             "D": 500,
//             "M": 1000
//         }
//         number = 0
//         s = s.replace("IV", "IIII")
//         s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
//         s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
//         for char in s:
//             number += translations[char]
//         print(number)
function romanToInt(a) {
  const translations = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let counter = 0;
  a.replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");

  for (let char of a) {
    counter += translations[char];
  }
  return counter;
}
console.log(romanToInt("MMVIII"));

