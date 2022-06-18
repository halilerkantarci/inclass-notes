//* ================================================
//*                      OOPS
//* ================================================

const book = {
  title: "The brothers karamazov",
  author: "dostoyevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book);
