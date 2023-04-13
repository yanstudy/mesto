let classesOfPopup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__job");

function showPopup() {
  classesOfPopup.classList.add("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup() {
  classesOfPopup.classList.remove("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

editButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__container");

let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-job");

function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
