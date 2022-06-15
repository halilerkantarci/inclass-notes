fetch("https://api.github.com/users")
  .then((res) => {
    // error handling
    if (!res.ok) {
      throw new Error(`Something went wrong!!!!!: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => updateDom(data))
  // catch hatayı yazalıp yazdırır
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");
  userDiv.innerHTML += ``;
};
