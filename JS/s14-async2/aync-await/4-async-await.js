//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* asyn keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//! Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//! kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

//! YAZIMI ASENKRON,ÇALIŞMASI SENKRON GİBİ DÜŞÜNEBİLİRSİN

let hata = false;

const getUsers = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    if (!res.ok) {
      hata = true;
      // throw new Error(`Something WENT WRONG!!!!: ${res.status}`);
    }
    const data = await res.json();
    updateDom(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");

  if (hata) {
    userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>
    <img src="68674529551899935909208749f998525f2ebf13.jpeg" alt="">`;
  } else {
    data.forEach((user) => {
      //! destructure
      const { login, avatar_url, html_url } = user;
      userDiv.innerHTML += `
    <h2 class="text-warning">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />
    <h3>HTML_URL:${html_url}</h3>
  `;
    });
  }
};
