console.log("*********\n SESSİON 3 - CONDİTİONALS \n ********");
// ! İ F   S T A T E M E N T    E X A M P L E
// const n1 = +prompt("Please enter a number");
// console.log(n1, typeof n1);
// if (n1 > 0) {
//   console.log(`${n1} is a positive number`);
// } else {
//   console.log(`${n1} is equal to either zero or negative`);
// }

// const time = 21;
// if (time < 11) {
//   console.log("good morning");
// } else if (time < 18) {
//   console.log("good afternoon");
// } else {
//   console.log("good evening");
// }

//! chest size example
// const chest = prompt("enter your chest size");
// if (chest < 32) {
//   console.log("wrong size");
// } else if (chest < 35) {
//   console.log("s");
// } else if (chest < 38) {
//   console.log("m");
// } else if (chest < 41) {
//   console.log("l");
// } else if (chest < 44) {
//   console.log("xl");
// } else if (chest < 47) {
//   console.log("xxl");
// } else {
//   console.log("we do not have a suitable size for you");
// }

//! 3 number comparison example
// n1 is the greatest among n2 and n3
// 8 is the greatest among 3 and 5

// const n1 = prompt("enter a number");
// const n2 = prompt("enter a number");
// const n3 = prompt("enter a number");
// if (n1 > n2 && n1 > n3) {
//   console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// } else if (n2 > n1 && n2 > n3) {
//   console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// } else if (n3 > n1 && n3 > n2) {
//   console.log(`${n3} is the greatest among ${n2} and ${n1}`);
// }

//! T E R N A R Y    O P E R A T O R
// condition ? True : False
// let grade = prompt("Enter your grade");
// let result = grade >= 80 ? "are smart" : "should study";
// console.log(`you ${result}`);
//! 2. örnek
// const isLegal = prompt("enter your age");
// let result =
//   isLegal >= 18
//     ? "you are eligible to vote"
//     : "you are not eligible to vote yet";
// console.log(result);
//! 3. örnek
// let candrive = false;
// const hasdriverlicense = true;
// const hasgoodvision = true;
// const ishandicapped = false;
// const usingregularcar = true;

// result =
//   hasdriverlicense && hasgoodvision
//     ? !ishandicapped
//       ? "can drive"
//       : !usingregularcar
//       ? "can not drive"
//       : "can drive"
//     : "can not drive";
// console.log(result);

console.log("*********\n SWİTCH STATEMENT \n ********");
//! S W İ T C H   C A S E
//! example 1
// let text;
// let fruit = prompt("type your favorite fruit");
// //banana,lime,limon,orange,apple,default
// switch (fruit.toLowerCase()) {
//   case "banana":
//     text = "i like banana🍌";
//     break;
//   case "lime":
//   case "lemon":
//   case "orange":
//     text = `i am not a fan of ${fruit}`;
//     break;
//   case "apple":
//     text = `i like an apple 🍎`;
//     break;
//   default:
//     text = "i dont know that fruit";
// }
// console.log(text);

//! example 2
//pzts salı çrşm prşmb in class
//cuma teamwork
// cmts inclass + workshop
// pazar self study
// default yanlış gün girildi

// const day = prompt("enter a day:").toLowerCase();
// let message;
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//     message = "in class";
//     break;
//   case "friday":
//     message = "teamwork";
//     break;
//   case "saturday":
//     message = "inclass + workshop";
//     break;
//   case "sunday":
//     message = "self-study";
//     break;
//   default:
//     message = "wrong day";
// }
// console.log(message);

//! example
// output day count of a month of given year 2020 02=> 29 gün
// 2022 02 ==> 28 gün
const month = prompt("enter a month");
let year = "2020";
let message;
switch (month) {
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    message = `${month}. month is 31 days`;
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    message = `${month}. month is 30 days`;
    break;
  case "2":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      message = `${month}. is 29 days`;
    } else {
      message = `${month}. is 28 days`;
    }

    break;
  default:
    message = "wrong";
}
console.log(message);
