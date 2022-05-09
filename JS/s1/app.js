// console.log("*** app.js ***");
// let ad = prompt("adınızı girin");
// console.log("adınız:", ad);
// let sonuc = confirm("emin misin?");
// console.log(sonuc);
// console.log(' "istanbul" is the economic capital');
// document.write(' "istanbul" <br> is the economic capital'); // sayfanın üstüne yazdı
// console.log("adiniz:" + ad + " dir");
// console.log(`adiniz: ${ad} dir`);

var my_Number1 = 5;
console.log(my_Number1);
var my_Number1 = "hellö";
console.log(my_Number1);

// HATA VERİYOR
// let var1 = 55;
// console.log(var1);
// let var1 = 99;
// console.log(var1);

// {
//   let localVar1 = "local variable";
//   console.log(localVar1);
// }
// console.log(localVar1);  bu satırdan dolayı hata veriyor

{
  let localVar1 = "local variable";
  console.log(localVar1);
  var my_Name = "halil";
}
console.log(my_Name);

//CONST
const student = {
  first_name: "emin",
  number: "F1234",
};
console.log(student);
const otherStudent = student;
otherStudent.number = "F9876"; //otherstudentı değiştirdim ancak
console.log(student); //ancak student da değişti
console.log(otherStudent);

otherStudent = {
  firstName: "sinan",
  number: "F2334",
};
console.log(otherStudent); //içindekini değiştebilirim ancak bu şekilde yeni atama yapamam
