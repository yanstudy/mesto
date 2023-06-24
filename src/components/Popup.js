export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupOverlay = this._closePopupOverlay.bind(this);
    this.close = this.close.bind(this);
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
      .addEventListener("click", this.close);
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("mousedown", this._closePopupOverlay);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this._popup
      .querySelector(".popup__close-icon")
      .removeEventListener("click", this.close);
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener("mousedown", this._closePopupOverlay);
  }
}
