//! ARROW
//****** ÖRNEK 1 */
const topla = (a, b) => a + b;
console.log(topla(3, 4));
//! ARROW FONKSİYONLARDA EĞER TEK BİR İFADE KULLANILIRSA SÜSLÜ PARANTEZE İHTİYAÇ OLMAZ. AKSİ TAKTİRDE GEREKECEKTİR
const usAl = (x, y) => x ** y;
console.log(usAl(3, 4));

const menu = () => {
  console.log("======================");
  console.log("JAVASCRIPT IS SO EASY");
  console.log("======================");
};
menu();

//************* ÖRNEK 2 */
//********************************* */
// const a = prompt("bir sayi gir");
// const tekMi = (b) => (b % 2 ? "tek" : "çift");
// console.log(tekMi(a));

//************ ÖRNEK3 */
//********************* */
const r = prompt("yarıçapı giriniz");
const h = prompt("yükseklik giriniz");
const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("Silindirin Hacmi:", hacimHesapla(r, h).toFixed(3));
