const Animal = {
  async render() {
    return `
      <h2>Show Animal Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Animal;
