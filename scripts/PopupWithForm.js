import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this._form = popupSelector.querySelector(".popup__form");
    this._inputValues = Array.from(
      this._form.querySelectorAll(".popup__input")
    );
  }

  _getInputValues = () => {
    const inputs = {};
    this._inputValues.forEach((input) => {
      inputs[input.name] = input.value;
    });
    return inputs;
  };

  setInputValues = ({ name, job }) => {
    const [nameInput, jobInput] = this._inputValues;
    nameInput.value = name;
    jobInput.value = job;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.formSubmit(this._getInputValues());
    });
  }

  reset = () => {
    this._form.reset();
  };

  close = () => {
    super.close();
    this.reset();
  };
}
