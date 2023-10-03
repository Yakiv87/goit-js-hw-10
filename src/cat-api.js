// const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9";

// export async function fetchBreeds() {
//     const response = await fetch(`${url}/breeds?api_key=${api_key}`);
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return await response.json();       
// };

// export async function fetchCatByBreed(breedId) {
//     const response = await fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`);
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return await response.json();  
// };
// cat-api.js

import axios from 'axios';

const KEY = 'Alive_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9';

axios.defaults.headers.common['x-api-key'] = KEY; 

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data; 
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const params = { breed_ids: breedId };
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', { params });
    return response.data[0];
  } catch (error) {
    console.log(error);
  }  
}