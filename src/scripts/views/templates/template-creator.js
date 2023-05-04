const createAnimalDetailTemplate = (animal) => `
  <h2 class="animal__title">${animal.nama}</h2>
  <img class="animal__poster" src="${animal.gambar}" />
  <div class="animal__info">
  <h3>Information</h3>
    <h4>Nama Latin</h4>
    <p>${animal.nama_latin}</p>
    <h4>Jenis Makanan</h4>
    <p>${animal.jenis_makanan}</p>
    <h4>Makanan Kesukaan</h4>
    <p>${animal.makanan_kesukaan}</p>
    <h4>Jenis Spesies</h4>
    <p>${animal.jenis_spesies} minutes</p>
    <h4>Persebaran</h4>
    <p>${animal.pesebaran}</p>
  </div>
  <div class="animal__overview">
    <h3>Overview</h3>
    <p>${animal.deskripsi}</p>
  </div>
`;

const createAnimalItemTemplate = (animal) => `
  <div class="animal-item border-container">
    <div class="animal-item__header">
        <img class="animal-item__header__poster" alt="${animal.nama}"
            src="${animal.gambar}">
    </div>
    <div class="animal-item__content">
        <h3><a href="${`/#/detail/${animal.id}`}">${animal.nama}</a></h3>
        <p>${animal.deskripsi}</p>
    </div>
  </div>
  `;

const createItemEmpty = () => `
  <p>Empty</p>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this animal" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this animal" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createAnimalItemTemplate,
  createAnimalDetailTemplate,
  createItemEmpty,
};
