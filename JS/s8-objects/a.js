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
//* ORNEK 1 : KİSİLER DİZİSİNDEKİ JOBLARI TEK TEK YAZDIR
kisiler.forEach((a) => console.log(a.job));
//* ORNEK 2 : YASLARİ 1 ARTİRARAK YENİ BİR DİZİYE SAKLAYİNİZ
const y = kisiler.map((a) => a.age + 1);
console.log(y);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.
const x = kisiler.map((x) => ({
  name2: `${x.name} ${x.surname}`.toUpperCase(),
  age1: x.age + 5,
}));
console.log(x);
