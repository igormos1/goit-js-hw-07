import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const photosMarkup = createColorPhotosMarkup(galleryItems);

function createColorPhotosMarkup(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
      <a class="gallery__link"  href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);

galleryContainer.onclick = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {return;};
	basicLightbox.create(`<img src="${event.target.dataset.source}">`).show()
}
