// let a;
// console.log(a);
// console.log(b);
// console.log("hello");

// console.log(a);
// var a = 3; // var ile tanıtınca sadece undefined dönderir
// console.log(a);

// console.log(b);
// let b = 3; // let ile tanıtınca error verir
// console.log(b); // hata çıktığı için burayı da yürütmez

// let a = 3;
// console.log(typeof a);
// let b = "3";
// console.log(typeof b);

// let e = prompt("bir şey yazınız");
// console.log(typeof e);

// sayi bile yazsam string olarak dönüştürüyor o yüzden prompt başına + ekle
// let z = +prompt("bir şey yazınız");
// console.log(typeof z);

// let f = null;
// console.log(typeof f);

// let g = 1_000_000;
// console.log(typeof g);

// let k = +prompt("bir sayi giriniz : ");
// console.log(typeof k, k);
// console.log(isNaN(k)); //Not a number?

// console.log(25 + 15); //40
// console.log(025 + 015); //34 çünkü 025 octal bir sayıdır.octal yazmak istersen başına 0 koymalısın.

// console.log(0.1 + 0.2);

// let l = 0.1 + 0.2;
// console.log(l.toFixed(2)); //noktadan sonra 2 basamak göster

// S T R İ N G .*.*.*
// let m = "hello world";
// let n = "hello stranger";
// let p = `Merhaba JS`;
// console.log(typeof m, m);
// console.log(typeof n, n);
// console.log(typeof p, p);

// let r = `Merhaba ${1 + 2}`;
// console.log(r);

// let username = "MARK";
// console.log(`Merhaba ${username}`);

// B O O L E A N
// let x = Boolean("sa");
// let y = Boolean(3);
// console.log(x);
// console.log(y);
// let z = Boolean(true);
// console.log(z);

// let p = Boolean("");
// let l = Boolean(0);
// let m = Boolean(-0);
// let t = Boolean(null);
// console.log(p);
// console.log(l);
// console.log(m);
// console.log(t);

//        O        B      J        E        C       T        S
// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1965,
//   color: "Black",
// };
// console.log(myCar);
// myCar.color = "Red";
// console.log(myCar);
// myCar.sunRoof = true;         // E K L E M E
// console.log(myCar);
// myCar.price = "1234$";
// console.log(myCar);
// myCar.age = function (current) {
//   console.log(current - this.year);
// };
// console.log(myCar);
// console.log(myCar.age(2022));

// delete myCar.sunRoof;             // DELETE  İLE  S İ L M E İŞLEMİ
// console.log(myCar);
