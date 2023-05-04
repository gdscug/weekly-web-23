const CONFIG = {
  BASE_URL_ANIMAL: 'https://animal.zinu.my.id/api/',

  // CACHE
  // CACHE_NAME: 'AnimalApp-V1',
  CACHE_NAME: new Date().toISOString(), // Development

  // IndexedDB
  DATABASE_NAME: 'animal-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'animals',
};

export default CONFIG;