const editPopup = document.querySelector("#editPopup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-icon");
const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector("#nameInput");
const nameOfPlaceInput = document.querySelector("#nameOfPlaceInput");
const jobInput = document.querySelector("#jobInput");
const placeInput = document.querySelector("#placeInput");
const cardsContainer = document.querySelector(".elements");
const newPlacePopup = document.querySelector("#newPlacePopup");
const addButton = document.querySelector(".profile__add-button");
const closeButtonForAddPopup = document.querySelector(".popup__close-icon_add");
const addNewCardButton = document.querySelector(".popup__container_add");
const imagePopup = document.querySelector("#imagePopup");
const cardTemplate = document.querySelector("#elements__element-template");
const closeButtonForPicture = document.querySelector(".popup__close-icon_pict");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// Функция создания карточки
const createCard = (card) => {
  const element = cardTemplate.content
    .querySelector(".elements__element")
    .cloneNode(true);
  element.querySelector(".elements__name").textContent = card.name;
  const picture = element.querySelector(".elements__picture");
  picture.src = card.link;
  picture.alt = `Картинка ${card.name}`;
  // лайк
  const heart = element.querySelector(".elements__heart");
  heart.addEventListener("click", (evt) => {
    evt.currentTarget.classList.toggle("elements__heart_liked");
  });
  // кнопка удаления
  const deleteCardButton = element.querySelector(".elements__delete-button");
  deleteCardButton.addEventListener("click", (evt) => {
    element.remove();
  });

  // открытие попапа картинки
  picture.addEventListener("click", (evt) => {
    imagePopup.classList.add("popup_opened");
    const bigImage = imagePopup.querySelector(".popup__image");
    const popupTitle = imagePopup.querySelector(".popup__title");
    bigImage.src = picture.src;
    bigImage.alt = `Картинка ${card.name}`;
    popupTitle.textContent = card.name;
  });

  return element;
};
// список заготовленных карточек
const cardList = initialCards.map((item) => {
  const currentCard = createCard(item);
  return currentCard;
});

// добавить карточку
const renderCard = (card) => {
  cardsContainer.prepend(createCard(card));
};

cardsContainer.prepend(...cardList);

// добавление новой карточки по кнопке
function addNewCard(evt) {
  evt.preventDefault();
  const currentName = evt.currentTarget.querySelector("#nameOfPlaceInput");
  const currentLink = evt.currentTarget.querySelector("#placeInput");
  const card = { name: currentName.value, link: currentLink.value };
  renderCard(card);
  closeAddPopup();
}
// попапы
function showPopup(evt) {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  editPopup.classList.add("popup_opened");
}
function closePopup(evt) {
  editPopup.classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

function showAddPopup() {
  newPlacePopup.classList.add("popup_opened");
}

function closeAddPopup() {
  newPlacePopup.classList.remove("popup_opened");
}

function closePictPopup() {
  imagePopup.classList.remove("popup_opened");
}

// обработчики событий
editButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
addButton.addEventListener("click", showAddPopup);
closeButtonForAddPopup.addEventListener("click", closeAddPopup);
addNewCardButton.addEventListener("submit", addNewCard);
closeButtonForPicture.addEventListener("click", closePictPopup);
