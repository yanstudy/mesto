export class Card {
  constructor(
    { name, link, likes, _id, owner },
    templateSelector,
    handleImageClick,
    handleDeleteCard,
    addLike,
    removeLike,
    infoData
  ) {
    this.likes = likes;
    this.name = name;
    this.link = link;
    this.id = owner._id;
    this._userId = infoData._id;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._addLike = addLike;
    this._removeLike = removeLike;
  }

  toggleLike = (evt) => {
    const myLike = evt.currentTarget.classList.contains(
      "elements__heart_liked"
    );
    if (!myLike) {
      this._addLike();
    } else {
      this._removeLike();
    }
  };

  updateAmountOfLikes(likes) {
    this.amountOfLikes.textContent = likes.length;
    this._heart.classList.toggle("elements__heart_liked");
  }

  deleteCard = () => {
    this.element.remove();
  };

  _confirmDeleteCard = () => {
    this._handleDeleteCard();
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  render = () => {
    this.element = this._getTemplate();

    this.element.querySelector(".elements__name").textContent = this.name;
    this.amountOfLikes = this.element.querySelector(".elements__likes");
    this.amountOfLikes.textContent = this.likes.length;
    this.picture = this.element.querySelector(".elements__picture");
    this.picture.src = this.link;
    this.element.querySelector(
      ".elements__picture"
    ).alt = `Картинка ${this.name}`;
    if (this.id !== this._userId) {
      this.element.querySelector(".elements__delete-button").style.display =
        "none";
    }
    this._heart = this.element.querySelector(".elements__heart");
    for (let i = 0; i < this.likes.length; i++) {
      if (this.likes[i]._id === this._userId) {
        this._heart.classList.add("elements__heart_liked");
      }
    }

    this._setEventListeners();
    return this.element;
  };

  _setEventListeners() {
    this.element
      .querySelector(".elements__heart")
      .addEventListener("click", this.toggleLike);
    this.element
      .querySelector(".elements__delete-button")
      .addEventListener("click", this._confirmDeleteCard);
    this.picture.addEventListener("click", () => {
      this._handleImageClick(this, this.picture);
    });
  }
}
