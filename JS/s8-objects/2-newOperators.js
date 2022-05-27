//* ===============================================
//* NEW GENERATİON OPERATORS: DESTRUCTURING (OBJECT)
//* ===============================================

const car = {
  name: "bmw",
  model: 1990,
  engine: 1.6,
};

//* 1. Yöntem (classical)
console.log(car.model);

//* 2. YÖNTEM : DESTRUCTIRING
const { name, model } = car;
console.log(name, model);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name1: "BMW",
    model1: 1990,
    engine1: 1.6,
  },
  car2: {
    name1: "Mercedes",
    model1: 2022,
    engine1: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1, car2);

const { name1, model1 } = car1;
console.log(name1, model1);

// tekrardan name1 , model1 kullandığımızda hata verdiği için yeni isim tanımlaması yaptık
const { name1: car2Name, model1: car2Model } = car2;
console.log(car2Name, car2Model);

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
];
kisiler.forEach((kisi) => {
  console.log("NAME:", kisi.name);
  console.log("SURNAME:", kisi.surname);
  console.log("Age:", kisi.age);
});
//! 2. YOL
kisiler.forEach((kisi) => {
  const { name, surname, age } = kisi;
  console.log("NAME:", name);
  console.log("SURNAME:", surname);
  console.log("Age:", age);
});

//* function
function getInfo() {
  return {
    id: 101,
    name2: "Apple",
    price: 20000,
  };
}
const { id, name2, price } = getInfo();
console.log(id, price);

//* ===============================================
//* NEW GENERATİON OPERATORS: DESTRUCTURING (ARRAY)
//* ===============================================

const names = ["ahmet", "mehmet", "ismet", "saffet", "iffet"];

//* CLASSICAL METHODS
const name4 = names[0];

//* DESTRUCTIRING
const [person1, person2, person4, , a] = names;
console.log(person1, person2, person4, a);

//* ===============================================
//* NEW GENERATİON OPERATORS: SPREAD OR REST (...)
//* ===============================================

/* REST: (Arrays) */
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadolu"];

const [vec1, vec2, ...restVehicles] = vehicles;
console.log(vec1, vec2, restVehicles);

// REST Objects
const personel = {
  pName: "john",
  surname: "smith",
  job: "dev",
  age: 30,
};
const { pName, job, ...surnameAge } = personel;
console.log(pName, job, surnameAge);

//* Rest ( Function Arguments )
const topla = (x, y) => {
  return x + y;
};

//? hata vermez ama fakat sadece 2 argümanı toplar
console.log(topla(1, 2, 3, 4, 5, 6));

//! BÜTÜN SAYILARI TOPLATMAK İSTERSEK;
const hepsiniTopla = (...sayilar) => {
  let toplam = 0;
  console.log(sayilar);
  sayilar.forEach((sayi) => (toplam += sayi));
  return toplam;
};
console.log(hepsiniTopla(1, 2, 3, 4, 5, 6, 7));

//* ================
//* SPREAD
//* ================

const araclar = ["uçak", "helikopter", "bisiklet"];
const otomobiller = ["tır", "otobüs", "araba", "suv"];
const tumaracalar = [...araclar, ...otomobiller];
console.log(tumaracalar);

// Example
const meyveler = ["cherry", "pear", "apricot", "raisin"];
const turunclar = ["mandarin", ...meyveler, "lime", "orange"];
console.log(turunclar);

// Ornek (String spread)
let str = "Hello FS";
console.log([...str]);
console.log(Array.from(str));

// Ornek (max)
console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log("MAX:", Math.max(...rakamlar));
