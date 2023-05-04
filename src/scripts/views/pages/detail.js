import UrlParser from '../../routes/url-parser';
import AnimalApiSource from '../../data/animal-api-source';
import { createAnimalDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="animal" class="animal"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const animal = await AnimalApiSource.detailAnimal(url.id);

    // TODO: tampilkan animal di dalam DOM
    const animalContainer = document.querySelector('#animal');
    animalContainer.innerHTML = createAnimalDetailTemplate(animal);
  },
};

export default Detail;
