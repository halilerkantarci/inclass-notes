//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? Bir parent class'in degisken ve fonksiyonelliği extends keyword'u ile
//? child class'a gecmektedir.(INHERITANCE)

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getTitle = function () {
    //   return this.title;
    // };
  }
  //! bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
}
console.log(Book);
console.log(typeof Book);

//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

console.log(book1);
console.log(book1.getSummary());

//? Sub-class tanimlanmasi
class Magazine extends Book {
  constructor(title, author, year, month) {
    //! bookun constructor'ı çağırıldı
    super(title, author, year);
    this.month = month;
  }
}
console.log(Magazine);
const mag1 = new Magazine("scientific research", "einstein", 1905, "september");
console.log(mag1); // object
console.log(typeof mag1);

//! SUPER() sayesinde book'un prototipi otomatik olarak kendi gelir, create yapmamıza gerek kalmadı
console.log(mag1.getSummary());
