import "../pages/index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { configFormSelector } from "../utils/configFormSelector.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

// попап-элементы
const popupEditProfile = document.querySelector("#editPopup");
const popupNewPlace = document.querySelector("#newPlacePopup");
const popupDeleteCard = document.querySelector("#deletePopup");
const popupEditAvatar = document.querySelector("#editAvatar");
const popupBigImage = document.querySelector("#imagePopup");
// формы
const formElementNewCard = document.querySelector("#formNewPlace");
const formElementEditAvatar = document.querySelector("#formEditAvatar");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const cardsContainer = document.querySelector(".elements");
const buttonAddPicture = document.querySelector(".profile__add-button");
const avatar = document.querySelector(".profile__avatar");

let cards;
let infoData;

// Запросы к серверу
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-70",
  headers: {
    authorization: "06c146c5-fdfa-4750-9867-de096eb4c728",
    "Content-Type": "application/json",
  },
});

const getUserInfo = () => {
  return api.getUserInfo();
};

const getInitialCards = () => {
  return api.getInitialCards();
};
// Получение всех необходимых данных сразу
Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfoResult, initialCardsResult]) => {
    infoData = userInfoResult;
    userInfo.setUserInfo(userInfoResult);

    cards = new Section(
      {
        items: initialCardsResult,
        renderer: (item) => {
          cards.addItem(createCard(item));
        },
      },
      cardsContainer
    );
    cards.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

// Данные пользователя
const userInfo = new UserInfo({ name, job, avatar });

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
  toggleLoading(popupEditProfile, true);
  api
    .editProfile(data)
    .then((result) => {
      userInfo.setUserInfo(result);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleLoading(popupEditProfile, false);
    });
}

// попап для добавления картинки
const popupImage = new PopupWithForm(popupNewPlace, addNewCard);
// добавление новой карточки по кнопке
function addNewCard({ name, link }) {
  toggleLoading(popupNewPlace, true);
  api
    .addNewCard({ name, link })
    .then((card) => {
      cards.addItem(createCard(card));
      popupImage.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleLoading(popupNewPlace, false);
    });

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
    handleOpenPopupForBigImage,
    handleDeleteCard,
    addLike,
    removeLike,
    infoData
  );

  // Постановка лайка
  function addLike() {
    api
      .addLike(item._id)
      .then((result) => {
        item.likes = result.likes;
        currentCard.updateAmountOfLikes(result.likes);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  // Снятие лайка
  function removeLike() {
    api
      .removeLike(item._id)
      .then((result) => {
        item.likes = result.likes;
        currentCard.updateAmountOfLikes(result.likes);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  // попап подтверждения удаления карточки (только для владельца карточки)
  const popupWithConfirmation = new PopupWithConfirmation(
    popupDeleteCard,
    confirmDelete
  );
  if (item.owner._id === infoData._id) {
    popupWithConfirmation.setEventListeners();
  }

  function handleDeleteCard() {
    popupWithConfirmation.open();
  }

  function confirmDelete() {
    api
      .deleteCard(item._id)
      .then((result) => {
        popupWithConfirmation.close();
        currentCard.deleteCard();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  const card = currentCard.render();
  return card;
}

// UX
function toggleLoading(popup, isLoading) {
  const currentButton = popup.querySelector(".popup__button");
  const formName = popup.querySelector("form").getAttribute("name");
  const currentText = currentButton.textContent.trim();
  if (isLoading) {
    currentButton.textContent = currentText + "...";
    formValidators[formName].disableButton();
  } else {
    currentButton.textContent = currentText.slice(0, currentText.length - 3);
    formValidators[formName].enableButton();
  }
}

// Изменение аватара
const popupForEditAvatar = new PopupWithForm(popupEditAvatar, handleEditAvatar);
function handleEditAvatar(link) {
  toggleLoading(popupEditAvatar, true);
  api
    .editAvatar(link)
    .then((result) => {
      userInfo.setUserInfo(result);
      popupForEditAvatar.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleLoading(popupEditAvatar, false);
    });
}

// обработчики событий
buttonEditProfile.addEventListener("click", showPopupProfile);
buttonAddPicture.addEventListener("click", () => {
  popupImage.open();
  formElementNewCard.reset();
  formValidators.formNewPlace.resetError();
});
avatar.addEventListener("click", () => {
  popupForEditAvatar.open();
  formElementEditAvatar.reset();
  formValidators.formEditAvatar.resetError();
});
popupProfile.setEventListeners();
popupImage.setEventListeners();
popupForEditAvatar.setEventListeners();
popupWithPicture.setEventListeners();

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
