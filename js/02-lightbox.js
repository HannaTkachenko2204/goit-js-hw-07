import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const arrOfItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}"
                title="${description}"
             />
        </a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", arrOfItems);

new SimpleLightbox(".gallery a");