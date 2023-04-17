let classesOfPopup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__job");
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");

function showPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  classesOfPopup.classList.add("popup_opened");
}
function closePopup() {
  classesOfPopup.classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
