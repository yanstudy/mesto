import { Card } from "./Card.js";
import { FormValidator } from "./validation.js";
import { configFormSelector } from "./configFormSelector.js";
import { initialCards } from "./cards.js";

const popupEditProfile = document.querySelector("#editPopup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const closeButtonForEditProfilePopup = document.querySelector(
  ".popup__close-icon_edit"
);
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
const closeButtonForAddPopup = document.querySelector(".popup__close-icon_add");
const formElementNewCard = document.querySelector("#formNewPlace");
const popupBigImage = document.querySelector("#imagePopup");
const cardTemplate = document.querySelector("#elements__element-template");
const closeButtonForPicture = document.querySelector(".popup__close-icon_pict");
const bigImage = popupBigImage.querySelector(".popup__image");
const popupTitle = popupBigImage.querySelector(".popup__title");
const nameOfPictureToAdd = document.querySelector("#nameOfPlaceInput");
const linkOfPictureToAdd = document.querySelector("#placeInput");
const submitButtonAddNewPlace = document.querySelector(".popup__button_add");

// Валидация форм
const formList = document.querySelectorAll(configFormSelector.formSelector);
[...formList].forEach((formElement) => {
  const formToValidate = new FormValidator(configFormSelector, formElement);
  formToValidate.enableValidation();
});

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
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
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
  const formToValidate = new FormValidator(
    configFormSelector,
    formElementProfile
  );
  formToValidate.resetError();
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

const handleOpenPopupForBigImage = (card, picture) => {
  openPopup(popupBigImage);
  bigImage.src = picture.src;
  bigImage.alt = `Картинка ${card.name}`;
  popupTitle.textContent = card.name;
};

// список заготовленных карточек
const cardList = initialCards.map((item) => {
  const currentCard = new Card(
    item,
    "#elements__element-template",
    handleOpenPopupForBigImage
  );
  const card = currentCard.render();
  return card;
});

// добавить карточку
const renderCard = (card) => {
  const renderedCard = new Card(
    card,
    "#elements__element-template",
    handleOpenPopupForBigImage
  ).render();

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
closeButtonForEditProfilePopup.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
formElementProfile.addEventListener("submit", handleFormSubmitProfile);
buttonAddPicture.addEventListener("click", () => {
  openPopup(popupNewPlace);
  formElementNewCard.reset();
  const formToValidate = new FormValidator(
    configFormSelector,
    formElementNewCard
  );
  formToValidate.resetError();
});
closeButtonForAddPopup.addEventListener("click", () =>
  closePopup(popupNewPlace)
);
formElementNewCard.addEventListener("submit", addNewCard);
closeButtonForPicture.addEventListener("click", () =>
  closePopup(popupBigImage)
);
