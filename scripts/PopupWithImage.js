import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.bigImage = popupSelector.querySelector(".popup__image");
    this.popupTitle = popupSelector.querySelector(".popup__title");
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
