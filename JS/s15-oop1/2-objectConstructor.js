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

//! *********** ilk .js de her bir kitap için ayrı ayrı obje oluşturmam lazımdı. burada tek bir function yapıp obje halinde kullanarak bellekten yer kazanıyoruz //!**
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  };
}

//! book fonksiyonuna özellik ekleme

Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

//? new keyword'u Book Constructor'ini parametereler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'a da hayat bulmus olur.

const book1 = new Book("kasagi", "ömer seyfettin", 1920);
const book2 = new Book("sinekli bakkal", "halide edip adıvar", 1956);

console.log(book1);
console.log(typeof book2, book2);
console.log(book2.getSummary());

// ADDING A PROPERTY
book1.price = 100;
//! book2 ye eklemez
console.log(book1, book2);

Book.prototype.type = "novel";

console.log(book1);
console.log(book1.getAge());
console.log(book2.getAge());
console.log(Book);
//! prototype görme
console.log(Book.prototype);
console.log(book2.type);

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina kolay bir
//! sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin guzelligi bu metot'un olusan
//! tum instance'lerin belleginde yer kaplamamasi ancak tum instance'larin bu metota
//! ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece tek bir yer kaplamaktadir.

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

//!Object'lerin proto alanini gormk icin .protoype
console.log(Book.prototype);

//!instance'larin proto alanini gormk icin .__proto__
console.log(book1.__proto__);
