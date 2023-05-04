import FavoriteAnimalIdb from '../data/favorite-animal-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, animal }) {
    this._likeButtonContainer = likeButtonContainer;
    this._animal = animal;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._animal;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteAnimalIdb.getAnimal(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteAnimalIdb.putAnimal(this._animal);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteAnimalIdb.deleteAnimal(this._animal.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
