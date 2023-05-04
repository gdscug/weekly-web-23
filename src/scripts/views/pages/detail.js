import UrlParser from '../../routes/url-parser';
import AnimalApiSource from '../../data/animal-api-source';
import { createAnimalDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="animal" class="animal"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const animal = await AnimalApiSource.detailAnimal(url.id);

    // TODO: tampilkan animal di dalam DOM
    const animalContainer = document.querySelector('#animal');
    animalContainer.innerHTML = createAnimalDetailTemplate(animal);

    // TODO: tampilkan tombol favorit di dalam DOM
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      animal,
    });
  },
};

export default Detail;
