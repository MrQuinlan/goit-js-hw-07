import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('ul.gallery');

const makeGalleryMarkup = elements => {
    return elements.map(
        element =>
            `<a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" alt="${element.description}"/></a>`,
    );
};

const galleryWrapper = makeGalleryMarkup(galleryItems).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryWrapper);

const lightBox = new SimpleLightbox('ul.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom',
});
