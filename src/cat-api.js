const url = 'https://api.thecatapi.com/v1';
const api_key = "live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9";

export async function fetchBreeds() {
    const response = await fetch(`${url}/breeds?api_key=${api_key}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();       
};

export async function fetchCatByBreed(breedId) {
    const response = await fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();  
};