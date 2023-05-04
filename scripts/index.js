let editPopup = document.querySelector("#editPopup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__job");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");
let cardsContainer = document.querySelector(".elements");
let newPlacePopup = document.querySelector("#newPlacePopup");
let addButton = document.querySelector(".profile__add-button");
let closeButtonForAddPopup = document.querySelector(".popup__close-icon_add");
let addNewCardButton = document.querySelector(".popup__container_add");
let deleteCardButtons;

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
function renderCards() {
  initialCards.map((currentCard) => {
    const cardTemplate = document.querySelector(
      "#elements__element-template"
    ).content;
    const card = cardTemplate
      .querySelector(".elements__element")
      .cloneNode(true);
    card.querySelector(".elements__name").textContent = currentCard.name;
    const picture = card.querySelector(".elements__picture");
    picture.src = currentCard.link;
    picture.alt = `Картинка ${currentCard.name}`;
    cardsContainer.append(card);
    const heart = card.querySelector(".elements__heart");
    heart.addEventListener("click", (evt) => {
      evt.currentTarget.classList.toggle("elements__heart_liked");
    });

    const deleteCardButton = card.querySelector(".elements__delete-button");
    deleteCardButton.addEventListener("click", (evt) => {
      const cardItem = evt.currentTarget.closest(".elements__element");
      const cardName = cardItem.querySelector(".elements__name").textContent;
      const cardLink = cardItem
        .querySelector(".elements__picture")
        .getAttribute("src");
      const index = initialCards.findIndex(
        (card) => card.name === cardName && card.link === cardLink
      );
      if (index !== -1) {
        initialCards.splice(index, 1);
      }
      cardItem.remove();
    });
  });
}
renderCards();

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

function addNewCard(evt) {
  evt.preventDefault();
  const currentName = evt.currentTarget.querySelector("#nameInput");
  const currentLink = evt.currentTarget.querySelector("#jobInput");
  initialCards.unshift({ name: currentName.value, link: currentLink.value });
  cardsContainer.innerHTML = "";
  renderCards();
  closeAddPopup();
}

editButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);

addButton.addEventListener("click", showAddPopup);
closeButtonForAddPopup.addEventListener("click", closeAddPopup);

addNewCardButton.addEventListener("submit", addNewCard);
