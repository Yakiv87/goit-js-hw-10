// import axios from 'axios';

// const KEY = 'Alive_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9';

// axios.defaults.headers.common['x-api-key'] = KEY; 

// export async function fetchBreeds() {
//   try {
//     const response = await axios.get('https://api.thecatapi.com/v1/breeds');
//     return response.data; 
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// export async function fetchCatByBreed(breedId) {
//   try {
//     const params = { breed_ids: breedId };
//     const response = await axios.get('https://api.thecatapi.com/v1/images/search', { params });
//     return response.data[0];
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }  
// }
// export { getBreeds, getCatImageByBreedId };

const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}