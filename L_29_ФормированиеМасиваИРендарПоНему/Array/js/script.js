// Массив

//Что мы делаем:
//1. при отправке формы данные записываются в массив cards_info в виде объектов
//2. из массива cards_info с {} достаем данные и рендерим из них карточки

// Способ 1

// const form = document.querySelector(".form");
// const cardContainer = document.querySelector(".cards_container");
// const cards_info = [];

// const render = () => {
//   cardContainer.innerText = ""; // очищает контейнер перед новым рендером !!!
//   cards_info.forEach((el) => {
//     const cardElem = document.createElement("div");
//     const nameElem = document.createElement("p");
//     const emailContainer = document.createElement("div");
//     const emailElem = document.createElement("a");
//     const emailTextElem = document.createElement("span");
//     const photoElem = document.createElement("img");

//     nameElem.innerText = `Name ${el.firstname} ${el.lastname}`;

//     emailElem.innerText = el.email;
//     emailElem.href = `mailto:${el.email}`;
//     emailTextElem.innerText = "Email: ";

//     photoElem.src = el.photo;
//     photoElem.alt = "photo";
//     photoElem.classList.add("img");

//     emailContainer.append(emailTextElem, emailElem);
//     cardElem.classList.add("card");
//     cardElem.append(nameElem, emailContainer, photoElem);
//     cardContainer.append(cardElem);
//   });
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const { firstname, lastname, email, photo } = event.target;

//   // пушим в Array cards_info[] Object - const { firstname, lastname, email, photo } = event.target;
//   cards_info.push({
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     photo: photo.value,
//   });

//   firstname.value = "";
//   lastname.value = "";
//   email.value = "";
//   photo.value = "";
//   //   console.log(cards_info); // [{…}]

//   render();
// });
// -----------------------------------------------
// Способ 2

// Создает одну карточку

// const form = document.querySelector(".form");
// const cardContainer = document.querySelector(".cards_container");
// const cards_info = [];

// const render = (el) => {
//   const cardElem = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const emailContainer = document.createElement("div");
//   const emailElem = document.createElement("a");
//   const emailTextElem = document.createElement("span");
//   const photoElem = document.createElement("img");

//   nameElem.innerText = `Name ${el.firstname} ${el.lastname}`;

//   emailElem.innerText = el.email;
//   emailElem.href = `mailto:${el.email}`;
//   emailTextElem.innerText = "Email: ";

//   photoElem.src = el.photo;
//   photoElem.alt = "photo";
//   photoElem.classList.add("img");

//   emailContainer.append(emailTextElem, emailElem);
//   cardElem.classList.add("card");
//   cardElem.append(nameElem, emailContainer, photoElem);
//   cardContainer.append(cardElem);
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const { firstname, lastname, email, photo, progress } = event.target;

//   cards_info.push({
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     photo: photo.value,
//     progress: progress.value,
//   });

//   firstname.value = "";
//   lastname.value = "";
//   email.value = "";
//   photo.value = "";
//   progress.value = "";
//   console.log(cards_info); // [{…}]

//   render(cards_info[cards_info.length - 1]);
// });
// -----------------------------------------------

// Способ 3 Деструктуризация

// const form = document.querySelector(".form");
// const cardContainer = document.querySelector(".cards_container");
// const cards_info = [];

// // 1. при отправке формы данные записываются в массив cards_info в виде объектов + вызывается функция рендема render();
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const { firstname, lastname, email, photo } = event.target; // собираются данные из input

//   cards_info.push({
//     // данные пушаться в массив в формате ключь значение в виде обьекта
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     photo: photo.value,
//   });

//   firstname.value = "";
//   lastname.value = ""; // очищает поля ввода
//   email.value = "";
//   photo.value = "";
//   // console.log(cards_info); // [{…}]  - возврат что запушили

//   render(); // запускается функция рендема
// });

// const render = () => {
//   // описсываем что за функция render
//   cardContainer.innerText = ""; // очищает контейнер перед новым рендером
//   cards_info.forEach(({ firstname, lastname, email, photo }) => {
//     // пробегаемся по массифу cards_info методом forEach и для каждого эллемента  из массива cards_info  достаем данные и рендерим из них карточки

//     const cardElem = document.createElement("div");
//     const nameElem = document.createElement("p");
//     const emailContainer = document.createElement("div");
//     const emailElem = document.createElement("a");
//     const emailTextElem = document.createElement("span");
//     const photoElem = document.createElement("img");

//     nameElem.innerText = `Name ${firstname} ${lastname}`;

//     emailElem.innerText = email;
//     emailElem.href = `mailto:${email}`;
//     emailTextElem.innerText = "Email: ";

//     photoElem.src = photo;
//     photoElem.alt = "photo";
//     photoElem.classList.add("img");

//     emailContainer.append(emailTextElem, emailElem);
//     cardElem.classList.add("card");
//     cardElem.append(nameElem, emailContainer, photoElem);
//     cardContainer.append(cardElem);
//   });
// };
// -----------------------------------------------------------------

// Способ 4

// Создает одну карточку
const form = document.querySelector(".form");
const cardContainer = document.querySelector(".cards_container");
const cards_info = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { firstname, lastname, email, photo } = event.target;

  cards_info.push({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    photo: photo.value,
  });

  firstname.value = "";
  lastname.value = "";
  email.value = "";
  photo.value = "";
  console.log(cards_info); // [{…}]

  render(cards_info[cards_info.length - 1]);
});

const render = ({ firstname, lastname, email, photo }) => {
  const cardElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const emailContainer = document.createElement("div");
  const emailElem = document.createElement("a");
  const emailTextElem = document.createElement("span");
  const photoElem = document.createElement("img");

  nameElem.innerText = `Name ${firstname} ${lastname}`;

  emailElem.innerText = email;
  emailElem.href = `mailto:${email}`;
  emailTextElem.innerText = "Email: ";

  photoElem.src = photo;
  photoElem.alt = "photo";
  photoElem.classList.add("img");

  emailContainer.append(emailTextElem, emailElem);
  cardElem.classList.add("card");
  cardElem.append(nameElem, emailContainer, photoElem);
  cardContainer.append(cardElem);
};
