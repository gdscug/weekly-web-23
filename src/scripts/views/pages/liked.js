import FavoriteAnimalIdb from '../../data/favorite-animal-idb';
import { createAnimalItemTemplate, createItemEmpty } from '../templates/template-creator';

const Liked = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Lovely Animals</h2>
      <div id="info" class="content__info">
      
      </div>
      <div id="animals" class="animals">
      
      </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const animals = await FavoriteAnimalIdb.getAllAnimal();

    if (animals.length > 0) {
      const moviesContainer = document.querySelector('#animals');

      animals.forEach((movie) => {
        moviesContainer.innerHTML += createAnimalItemTemplate(movie);
      });
    } else {
      const infoContainer = document.querySelector('#info');
      infoContainer.innerHTML = createItemEmpty();
    }
  },
};

export default Liked;
