import AnimalApiSource from '../../data/animal-api-source';

const Animal = {
  async render() {
    return `
      <h2>Show Animal Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const animals = await AnimalApiSource.listAnimals();
    console.log(animals);

    // TODO: tampilkan animals di dalam DOM
  },
};

export default Animal;
