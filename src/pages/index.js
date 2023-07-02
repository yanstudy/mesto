import { Card } from "../components/Card.js";
import { FormValidator } from "../utils/validation.js";
import { configFormSelector } from "../utils/configFormSelector.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const popupEditProfile = document.querySelector("#editPopup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupNewPlace = document.querySelector("#newPlacePopup");
const popupDeleteCard = document.querySelector("#deletePopup");
const popupEditAvatar = document.querySelector("#editAvatar");

const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const cardsContainer = document.querySelector(".elements");
const buttonAddPicture = document.querySelector(".profile__add-button");
const formElementNewCard = document.querySelector("#formNewPlace");
const formElementEditAvatar = document.querySelector("#formEditAvatar");
const popupBigImage = document.querySelector("#imagePopup");
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

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfoResult, initialCardsResult]) => {
    infoData = userInfoResult;
    name.textContent = userInfoResult.name;
    job.textContent = userInfoResult.about;
    avatar.style.backgroundImage = `url(${userInfoResult.avatar})`;

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
    console.log(err); // Handle errors
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
  api
    .editProfile(data)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  userInfo.setUserInfo(data);
  popupProfile.close();
}

// попап для добавления картинки
const popupImage = new PopupWithForm(popupNewPlace, addNewCard);
// добавление новой карточки по кнопке
function addNewCard({ name, link }) {
  api
    .addNewCard({ name, link })
    .then((card) => {
      cards.addItem(createCard(card));
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

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
        this.likes = result.likes;
        this.amountOfLikes.textContent = this.likes.length;
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
        this.likes = result.likes;
        this.amountOfLikes.textContent = this.likes.length;
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  // попап подтверждения удаления карточки
  const popupWithConfirmation = new PopupWithConfirmation(
    popupDeleteCard,
    confirmDelete
  );

  function handleDeleteCard() {
    popupWithConfirmation.open();
  }
  function confirmDelete() {
    api
      .deleteCard(item._id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    popupWithConfirmation.close();
    currentCard.deleteCard();
  }
  const card = currentCard.render();
  return card;
}
// Изменение аватара
const popupForEditAvatar = new PopupWithForm(popupEditAvatar, handleEditAvatar);
function handleEditAvatar(link) {
  api
    .editAvatar(link)
    .then((result) => {
      popupForEditAvatar.close();
      avatar.style.backgroundImage = `url(${result.avatar})`;
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
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
