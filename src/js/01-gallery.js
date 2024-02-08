// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import { createGallery } from './helpers/createGallery';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  const isActive = evt.target.classList.contains('gallery__image');

  if (!isActive) {
    return;
  }
}

// function createGallery(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//    </a>
// </li>`;
//     })
//     .join('');
// }

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
