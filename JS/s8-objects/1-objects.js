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

//* ---------------------------------------------------------
//* 3- object literal ( en çok tercih edilen yöntem)
//* ---------------------------------------------------------

const calisan = {
  ad: "halil",
  soyad: "erkantarci",
  yas: 24,
  meslek: "full stack developer",
  diller: ["c", "c++", "phyton", "js"],
  maas: "4000ZLT",
};
console.log(calisan);
calisan.nationality = "turkey";
console.log(calisan);
console.log(calisan.diller);
console.log(calisan.diller[3]);
console.log(calisan.diller.push("kotlin"));
console.log(calisan.diller);
//* bu şekilde orijinal dizi de değişir
const isci = calisan;
isci.maas = 5000;
console.log(isci);
console.log(calisan);
// Object Literal
const labor = {
  name: { firstName: "Ahmet", secondName: "Murat" },
  surname: "Yilmaz",
  age: "30",
  softlangs: ["Python", "C++", "JS", `Ruby`, `Swift`, "Unity"],
};
console.log(labor.name.secondName, labor.softlangs[2]);

//* ======================================
//*               OBJECT METOTLAR
//* ======================================

const kisi = {
  ad: "can",
  soyad: "canan",
  dogum: 1998,
  meslek: "developer",
  ehliyet: true,
  myfunction: function () {
    return new Date().getFullYear() - this.dogum;
  },
  ozet: function () {
    return `${this.ad} ${this.myfunction()} yasindadir `;
  },
};
console.log("Yaş:", kisi.myfunction());
console.log("Bilgi", kisi.ozet());
//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.

//* ======================================
//*               OBJECT ITERATION
//* ======================================

//! NESTED OBJECTS
const kisilerObject = {
  halil: {
    ad: "halil",
    soyad: "erkantarci",
    yas: 24,
    meslek: "full stack developer",
    diller: ["c", "c++", "phyton", "js"],
    maas: "4000ZLT",
  },
  mehmet: {
    ad: "mehmet",
    soyad: "yılmaz",
    yas: 30,
    meslek: "full stack developer",
    diller: ["c", "c++", "phyton", "js"],
    maas: 20000,
  },
};
console.log(kisilerObject.mehmet);
console.log(kisilerObject.mehmet.maas);

//! JSON(JAVASCRİPT OBJECT NOTATİON)

const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },

  {
    name: "Ruzgar",
    surname: "Kuzey",
    job: "tester",
    age: 24,
  },
];

console.log(kisiler);
console.log(kisiler[4]);

//* ORNEK 1 : KİSİLER DİZİSİNDEKİ JOBLARI TEK TEK YAZDIR
kisiler.forEach((kisi) => console.log(kisi.job));

//* ORNEK 2 : YASLARİ 1 ARTİRARAK YENİ BİR DİZİYE SAKLAYİNİZ
const yaslar = kisiler.map((kisi) => (kisi.age += 1));
console.log(yaslar);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.
const kisilerFullIsim = kisiler.map((kisi) => ({
  fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
  age: kisi.age + 5,
}));
console.log(kisilerFullIsim);

//* Örnek-4: Yasi(age) 33'ten kücük olan kisilerin adlarini (name) listeleyiniz.
const kucuk33 = kisiler.map((a) => a.age < 33 && a.name);
console.log(kucuk33);

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

const kucuk = kisiler.filter((a) => a.age < 33).map((kisi) => kisi.name);
console.log(kucuk);
//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

const dev = kisiler
  .filter((kisi) => kisi.job == "developer")
  .map((kisi) => {
    ({ name, age } = kisi);
    return { name, age };
  });
console.log(dev);
//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((t, kisi) => t + kisi.age, 0) / kisiler.length;
console.log(ortYas);
