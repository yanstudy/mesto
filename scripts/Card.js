export class Card {
  constructor(data, templateSelector, handleOpenPopupForBigImage) {
    this.name = data.name;
    this.link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopupForBigImage = handleOpenPopupForBigImage;
  }

  _toggleLikeHandler = (evt) => {
    evt.currentTarget.classList.toggle("elements__heart_liked");
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  render() {
    this.element = this._getTemplate();

    this.element.querySelector(".elements__name").textContent = this.name;
    this.picture = this.element.querySelector(".elements__picture");
    this.picture.src = this.link;
    this.element.querySelector(
      ".elements__picture"
    ).alt = `Картинка ${this.name}`;
    this._setEventListeners();
    return this.element;
  }

  _setEventListeners() {
    this.element
      .querySelector(".elements__heart")
      .addEventListener("click", this._toggleLikeHandler);
    this.element
      .querySelector(".elements__delete-button")
      .addEventListener("click", (evt) => {
        this.element.remove();
      });
    this.picture.addEventListener("click", () =>
      this._handleOpenPopupForBigImage(this.element, this.picture)
    );
  }
}
