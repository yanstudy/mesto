const popupEditProfile = document.querySelector("#editPopup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const closeButtonForEditProfilePopup =
  document.querySelector(".popup__close-icon");
const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const buttonTosaveProfile = document.querySelector(".popup__container");
const nameInput = document.querySelector("#nameInput");
const nameOfPlaceInput = document.querySelector("#nameOfPlaceInput");
const jobInput = document.querySelector("#jobInput");
const placeInput = document.querySelector("#placeInput");
const cardsContainer = document.querySelector(".elements");
const popupNewPlace = document.querySelector("#newPlacePopup");
const buttonAddPicture = document.querySelector(".profile__add-button");
const closeButtonForAddPopup = document.querySelector(".popup__close-icon_add");
const buttonForSaveNewCard = document.querySelector(".popup__container_add");
const popupBigImage = document.querySelector("#imagePopup");
const cardTemplate = document.querySelector("#elements__element-template");
const closeButtonForPicture = document.querySelector(".popup__close-icon_pict");
const bigImage = popupBigImage.querySelector(".popup__image");
const popupTitle = popupBigImage.querySelector(".popup__title");
const nameOfPictureToAdd = document.querySelector("#nameOfPlaceInput");
const linkOfPictureToAdd = document.querySelector("#placeInput");

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
    openPopup(popupBigImage);
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
  const card = {
    name: nameOfPictureToAdd.value,
    link: linkOfPictureToAdd.value,
  };
  renderCard(card);
  closePopup(popupNewPlace);
  nameOfPictureToAdd.value = "";
  linkOfPictureToAdd.value = "";
}
// попапы
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function showPopupProfile(evt) {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupEditProfile);
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
buttonTosaveProfile.addEventListener("submit", handleFormSubmitProfile);
buttonAddPicture.addEventListener("click", () => openPopup(popupNewPlace));
closeButtonForAddPopup.addEventListener("click", () =>
  closePopup(popupNewPlace)
);
buttonForSaveNewCard.addEventListener("submit", addNewCard);
closeButtonForPicture.addEventListener("click", () =>
  closePopup(popupBigImage)
);
