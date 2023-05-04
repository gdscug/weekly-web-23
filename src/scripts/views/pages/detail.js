import UrlParser from '../../routes/url-parser';
import AnimalApiSource from '../../data/animal-api-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const animal = await AnimalApiSource.detailAnimal(url.id);
    console.log(animal);

    // TODO: tampilkan animal di dalam DOM
  },
};

export default Detail;
