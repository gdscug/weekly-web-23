import CONFIG from './config';

const API_ENDPOINT = {
  LIST_ANIMALS: `${CONFIG.BASE_URL_ANIMAL}/animals`,
  DETAIL_ANIMAL: (id) => `${CONFIG.BASE_URL_ANIMAL}/animal?id=${id}`,
};

export default API_ENDPOINT;
