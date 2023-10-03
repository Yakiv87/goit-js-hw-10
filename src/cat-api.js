import axios from 'axios';
const url = 'https://api.thecatapi.com/v1'
const KEY =
  'live_yBkvF9Z54eQk85lwMo4K0kjH7Kd6OwpCTWP5G4DmYCsSMpoZFe3KuHRk7QIQI0cA';

axios.defaults.headers.common['x-api-key'] =
  'live_yBkvF9Z54eQk85lwMo4K0kjH7Kd6OwpCTWP5G4DmYCsSMpoZFe3KuHRk7QIQI0cA';

export function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${url}/images/search?api_key=${KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
