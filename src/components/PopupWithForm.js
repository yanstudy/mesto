import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupElement, formSubmit) {
    super(popupElement);
    this.formSubmit = formSubmit;
    this._form = popupElement.querySelector(".popup__form");
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

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this.formSubmit(this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmit);
  }

  reset = () => {
    this._form.reset();
  };

  close = () => {
    this._form.removeEventListener("submit", this._handleSubmit);
    super.close();
    this.reset();
  };
}
