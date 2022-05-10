//? O D E V 2: Tahmin Oyunu
//? Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
//? ÇÖZÜM 1
// let number = Math.floor(Math.random() * 100) + 1;
// let trials = 0;
// while (trials < 5) {
//   let guess = prompt("Guess a number between 1 and 100");
//   if (guess < number) {
//     alert("Too low!");
//   } else if (guess > number) {
//     alert("Too high!");
//   }
//   trials++;
// }
// alert("You guessed the number in " + trials + " trials!");

// alert("You could have guessed the number in 5 trials!");

//? ÇÖZÜM 2
console.log("OYUN");
let hak = 5;
const rastgeleSayi = Math.floor(Math.random() * 100 + 1);
do {
  const prompt = "lütfen 0-100 arasında bir sayi giriniz";
  hak--;
} while (hak <= 0);
