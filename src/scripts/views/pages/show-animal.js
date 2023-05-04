import AnimalApiSource from '../../data/animal-api-source';
import { createAnimalItemTemplate } from '../templates/template-creator';

const Animal = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Animal</h2>
      <div id="animals" class="animals">

      </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const animals = await AnimalApiSource.listAnimals();

    // TODO: tampilkan animals di dalam DOM
    const animalContainer = document.querySelector('#animals');
    animals.forEach((animal) => {
      animalContainer.innerHTML += createAnimalItemTemplate(animal);
    });
  },
};

export default Animal;
