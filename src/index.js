import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select'

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const catInfo = document.querySelector(".cat-info");
const breedName = document.querySelector(".breed-name");
const description = document.querySelector(".description");
const temperament = document.querySelector(".temperament");
const error = document.querySelector(".error");

window.addEventListener("DOMContentLoaded", () => {
        loader.style.display = "block";
        fetchBreeds()
        .then(data => {
            // вибір пород
            data.forEach(breed => {
                const option = document.createElement("option");
                option.value = breed.id;
                option.textContent = breed.name;
                breedSelect.appendChild(option);
            });
            loader.style.display = "none";
        })
        .catch(err => {
            //  повідомлення про помилку
            error.style.display = "block";
            console.error("Помилка завантаження списку порід:", err);
        });
});
breedSelect.addEventListener("change", () => {
    const selectedBreedId = breedSelect.value;
    
    // завантажувач
    loader.style.display = "block";
     
    catInfo.style.display = "none";

    //  інформація про кота за породою
    fetchCatByBreed(selectedBreedId)
        .then(data => {
            const catData = data[0];

            // Відображаємо інформацію 
            breedName.textContent = catData.breeds[0].name;
            description.textContent = catData.breeds[0].description;
            temperament.textContent = catData.breeds[0].temperament;
            catInfo.style.display = "block";
            
            // Вимикаємо завантажувач
            loader.style.display = "none";
        })
        .catch(err => {
            // повідомлення про помилку
            error.style.display = "block";
            console.error("Помилка завантаження інформації про кота:", err);
        });
});