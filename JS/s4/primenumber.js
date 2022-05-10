let x = prompt("please enter a number");
let sayac = 0;
for (let i = 2; i < x; i++) {
  if (x % i == 0) {
    sayac += 1;
  }
}
if (sayac > 0) {
  console.log(`Your number is not prime number`);
} else {
  console.log("Your number is prime number");
}
