import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const arrOfItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
            <img 
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}" 
                class = "gallery__image"
            />
            </a>
        </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", arrOfItems);
console.log(galleryEl);

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const bunnerURL = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${bunnerURL}" width="800" height="600">`).show()
});
