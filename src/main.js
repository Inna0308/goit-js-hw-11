import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

import { galleryTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const simpleLightbox = new SimpleLightbox('.js-gallery a', {
  overlayOpacity: 0.9,
  captions: true,
  captionsData: 'alt',
  captionDelay: 350,
});

const onSearchFormSubmit = event => {
  event.preventDefault();

  const userValue = searchFormEl.elements.user_query.value;

  if (!userValue) {
    iziToast.warning({
      message: 'Input field must not be empty.',
      position: 'topRight',
    });
    return;
  }

  galleryEl.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchPhotos(userValue)
    .then(data => {
      galleryEl.innerHTML = '';

      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';

        return;
      }

      const galleryCardTemplate = data.hits
        .map(image => galleryTemplate(image))
        .join('');

      galleryEl.innerHTML = galleryCardTemplate;

      simpleLightbox.refresh();
      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
