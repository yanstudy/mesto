import { Card } from "./Card.js";
import { FormValidator } from "./validation.js";
import { configFormSelector } from "./configFormSelector.js";
import { initialCards } from "./cards.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import PopupWithImage from "./PopupWithImage.js";

const popupEditProfile = document.querySelector("#editPopup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const cardsContainer = document.querySelector(".elements");
const popupNewPlace = document.querySelector("#newPlacePopup");
const buttonAddPicture = document.querySelector(".profile__add-button");
const formElementNewCard = document.querySelector("#formNewPlace");
const popupBigImage = document.querySelector("#imagePopup");

// Данные пользователя
const userInfo = new UserInfo({ name, job });

// попапы
// попап профиля
const popupProfile = new PopupWithForm(
  popupEditProfile,
  handleFormSubmitProfile
);
function showPopupProfile(evt) {
  popupProfile.open();
  popupProfile.reset();
  formValidators.formEditProfile.resetError();
  const info = userInfo.getUserInfo();
  popupProfile.setInputValues(info);
}
function handleFormSubmitProfile(data) {
  userInfo.setUserInfo(data);
  popupProfile.close();
}

// попап для добавления картинки
const popupImage = new PopupWithForm(popupNewPlace, addNewCard);
// добавление новой карточки по кнопке
function addNewCard({ name, link }) {
  const card = {
    name,
    link,
  };
  cards.addItem(createCard(card));
  popupImage.close();
  formElementNewCard.reset();
}

// попап с большой картинкой
const popupWithPicture = new PopupWithImage(popupBigImage);

const handleOpenPopupForBigImage = (card, picture) => {
  popupWithPicture.open(card, picture);
};

// создание новой карточки
function createCard(item) {
  const currentCard = new Card(
    item,
    "#elements__element-template",
    handleOpenPopupForBigImage
  );
  const card = currentCard.render();
  return card;
}
// создание заготовленныхъ карточек
const cards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cards.addItem(createCard(item));
    },
  },
  cardsContainer
);

cards.renderItems();

// обработчики событий
buttonEditProfile.addEventListener("click", showPopupProfile);
buttonAddPicture.addEventListener("click", () => {
  popupImage.open();
  formElementNewCard.reset();
  formValidators.formNewPlace.resetError();
});

// Валидация форм
const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configFormSelector);
