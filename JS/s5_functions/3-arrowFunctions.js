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
