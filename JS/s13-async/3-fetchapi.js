//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// default get
fetch("https://api.github.com/users").then((res) => console.log(res));
// json fortamatını bastırarak elemanları gördük
fetch("https://api.github.com/users").then((res) => console.log(res.json()));
// fetch in gönderdiği fonksiyonları then ve catch  yakalayıp bize gönderir
fetch("https://api.github.com/users")
  .then((res) => console.log(res.json()))
  .catch((err) => console.log(err));

// ham bilgi jsona çevrildi-> json hali ikinci then e geldi. ikinci then direkt olarak array halindeki json ı geitdi
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//! kullanıcından herhangi bir cevap gelmezse catch e girer

// bilerek hata aldık
fetch("https://api.github.com/user")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//FETCH asenkron yapıda olduğu için fetch içinde datafromapi değişkeni değer dönerir ancak fetch dışında değer döndermez(dışardaki önce yazılır,fetch sıraya girdiği için yazar)
let dataFromAPI;
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    dataFromAPI = data;
    console.log(dataFromAPI);
  })
  .catch((err) => console.log(err));

//! HATAYI BULMA
//? user sonundaki s yi silerek hata oluşturuyorum
let dataFromAPi;
fetch("https://api.github.com/user")
  .then((res) => {
    // error handling
    if (!res.ok) {
      throw new Error(`Something went wrong!!!!!: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    dataFromAPi = data;
    console.log(dataFromAPi);
  })
  // catch hatayı yazalıp yazdırır
  .catch((err) => console.log(err));
