import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('div.gallery');

const makeGalleryItem = items => {
    return items.map(item => {
        const galleryLink = document.createElement('a');
        galleryLink.setAttribute('class', 'gallery__link');
        galleryLink.setAttribute('href', `${item.original}`);

        const galleryImg = document.createElement('img');
        galleryImg.setAttribute('class', 'gallery__image');
        galleryImg.setAttribute('src', `${item.preview}`);
        galleryImg.setAttribute('data-source', `${item.original}`);
        galleryImg.setAttribute('alt', `${item.description}`);

        galleryLink.append(galleryImg);

        return galleryLink;
    });
};

const galleryWrapper = makeGalleryItem(galleryItems);
galleryRef.append(...galleryWrapper);

const lightbox = document.querySelector('body');

const onImageClick = event => {
    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    instance.show();

    lightbox.addEventListener('keydown', event => {
        if (event.code !== 'Escape') {
            return;
        }
        instance.close(() => {
            lightbox.removeEventListener('keydown', onImageClick);
        });
    });
};

galleryRef.addEventListener('click', onImageClick);
