import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this.bigImage = this._popup.querySelector(".popup__image");
    this.popupTitle = this._popup.querySelector(".popup__title");
  }

  _handleOpenPopupForBigImage = (card, picture) => {
    this.bigImage.src = picture.src;
    this.bigImage.alt = `Картинка ${card.name}`;
    this.popupTitle.textContent = card.name;
  };

  open(card, picture) {
    super.open();
    this._handleOpenPopupForBigImage(card, picture);
  }
}
