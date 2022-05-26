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
