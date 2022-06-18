//* ================================================
//*                      OOPS
//* ================================================

const book1 = {
  title: "The brothers karamazov",
  author: "dostoyevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());

const book2 = {
  title: "The Lily of The Valley",
  author: "Honore De Balzac",
  year: 1786,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)
