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

  setInputValues = (info) => {
    Object.keys(info).forEach((key, index) => {
      if (index < this._inputValues.length) {
        this._inputValues[index].value = info[key];
      }
    });
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
    super.close();
    this.reset();
  };
}
