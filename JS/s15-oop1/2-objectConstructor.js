//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date and Array nesneleri Object.prototype'dan miras almaktadir.

//? OBJECT CONSTRUCTOR
// "B" büyük yazılarak,object olduğu ima edildi
function Book(title1, author1, year1) {
  this.title = title1;
  this.author = author1;
  this.year = year1;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//? new keyword'u Book Constructor'ini parametereler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'a da hayat bulmus olur.

const book1 = new Book("kasagi", "ömer seyfettin", 1920);
const book2 = new Book("sinekli bakkal", "halide edip adıvar", 1956);

console.log(book1);
console.log(book2);
console.log(book2.getSummary());
