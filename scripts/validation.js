const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const enableButton = (buttonElement, config) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
};

const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

const toggleButtonState = (buttonElement, isActive, config) => {
  if (!isActive) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
};

function resetError(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((inputElement) =>
    hideInputError(formElement, inputElement, config)
  );
  toggleButtonState(formElement, inputList, config);
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(buttonElement, formElement.checkValidity(), config);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(buttonElement, formElement.checkValidity(), config);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  [...formList].forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(configFormSelector);
