import { Card } from "./Card.js";
import { FormValidator } from "./validation.js";
import { configFormSelector } from "./configFormSelector.js";
import { initialCards } from "./cards.js";

const popupEditProfile = document.querySelector("#editPopup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const formElementProfile = document.querySelector("#formEditProfile");
const nameInput = document.querySelector("#nameInput");
const nameOfPlaceInput = document.querySelector("#nameOfPlaceInput");
const jobInput = document.querySelector("#jobInput");
const placeInput = document.querySelector("#placeInput");
const cardsContainer = document.querySelector(".elements");
const popupNewPlace = document.querySelector("#newPlacePopup");
const buttonAddPicture = document.querySelector(".profile__add-button");
const formElementNewCard = document.querySelector("#formNewPlace");
const popupBigImage = document.querySelector("#imagePopup");
const cardTemplate = document.querySelector("#elements__element-template");
const bigImage = popupBigImage.querySelector(".popup__image");
const popupTitle = popupBigImage.querySelector(".popup__title");
const nameOfPictureToAdd = document.querySelector("#nameOfPlaceInput");
const linkOfPictureToAdd = document.querySelector("#placeInput");
const submitButtonAddNewPlace = document.querySelector(".popup__button_add");
const closeButtons = document.querySelectorAll(".popup__close-icon");

// Валидация форм
const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    // в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configFormSelector);

// попапы
const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};

const closePopupOverlay = (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("click", closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("mousedown", closePopupOverlay);
}

function showPopupProfile(evt) {
  openPopup(popupEditProfile);
  formElementProfile.reset();
  formValidators.formEditProfile.resetError();
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

const handleOpenPopupForBigImage = (card, picture) => {
  openPopup(popupBigImage);
  bigImage.src = picture.src;
  bigImage.alt = `Картинка ${card.name}`;
  popupTitle.textContent = card.name;
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
// список заготовленных карточек
const cardList = initialCards.map((item) => {
  return createCard(item);
});

// добавить карточку
const renderCard = (card) => {
  const renderedCard = createCard(card);

  cardsContainer.prepend(renderedCard);
};

cardsContainer.prepend(...cardList);

// добавление новой карточки по кнопке
function addNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: nameOfPictureToAdd.value,
    link: linkOfPictureToAdd.value,
  };
  renderCard(card);
  closePopup(popupNewPlace);
  formElementNewCard.reset();
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// обработчики событий
buttonEditProfile.addEventListener("click", showPopupProfile);

formElementProfile.addEventListener("submit", handleFormSubmitProfile);

buttonAddPicture.addEventListener("click", () => {
  openPopup(popupNewPlace);
  formElementNewCard.reset();
  formValidators.formNewPlace.resetError();
});

formElementNewCard.addEventListener("submit", addNewCard);

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
