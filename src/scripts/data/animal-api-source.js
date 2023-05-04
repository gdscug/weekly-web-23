import API_ENDPOINT from '../globals/api-endpoint';

class AnimalApiSource {
  static async listAnimals() {
    const response = await fetch(API_ENDPOINT.LIST_ANIMALS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailAnimal(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ANIMAL(id));
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default AnimalApiSource;
