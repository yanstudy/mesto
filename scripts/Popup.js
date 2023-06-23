export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      this.close();
    }
  };

  _closePopupOverlay = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  };

  setEventListeners() {
    this._popup
      .querySelector(".popup__close-icon")
      .addEventListener("click", this.close.bind(this));
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    this._popup.addEventListener(
      "mousedown",
      this._closePopupOverlay.bind(this)
    );
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
    this._popup.removeEventListener(
      "mousedown",
      this._closePopupOverlay.bind(this)
    );
  }
}
