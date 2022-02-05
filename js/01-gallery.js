import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

galleryEl.addEventListener('click', showingBigImage);

function createGalleryItem(images) { 
  return images.map(({ description, original, preview}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  }).join('');
};

function showingBigImage(event) { 
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  
  basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`).show()
  
  comparingNodeName(event)
};

function comparingNodeName(event) {
    event.preventDefault();

  if (event.target.nodeName !== "IMG") { 
    return;
  };
  
  return event.target.dataset.source;

};