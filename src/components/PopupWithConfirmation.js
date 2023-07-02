import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupElement, confirmDelete) {
    super(popupElement);
    this.popupElement = popupElement;
    this._confirmDelete = confirmDelete;
  }
  setEventListeners() {
    super.setEventListeners();
    this.popupElement
      .querySelector(".popup__button")
      .addEventListener("click", this._confirmDelete);
  }
}
