// * 1- Object() classından new operatörülü ile oluşturma
// * ====================================================
const araclar = new Object();
araclar.marka = "bmw";
araclar.motor = 1.3;
araclar.model = 2022;
console.log(araclar);
console.log(araclar.motor);
console.log(araclar["model"]);

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAdi = ad;
  this.perMaas = maas;
  console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır
