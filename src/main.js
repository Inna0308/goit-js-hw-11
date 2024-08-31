import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const galleryTemplate = imgInfo => {
  return `
      <li class="gallery-item">
      <a class="gallery-link" href="${imgInfo.largeImageURL}">
        <img
          class="gallery-image"
          src="${imgInfo.webformatURL}"
          data-source="${imgInfo.largeImageURL}"
          alt="${imgInfo.tags}"
        />
      </a>
      <div class="wrapper">
        <ul class="img-content-wrapper">
          <li class="text-info">
            Likes<span class="number">${imgInfo.likes}</span>
          </li>
          <li class="text-info">
            Views<span class="number">${imgInfo.views}</span>
          </li>
          <li class="text-info">
            Comments<span class="number">${imgInfo.comments}</span>
          </li>
          <li class="text-info">
            Downloads<span class="number">${imgInfo.downloads}</span>
          </li>
        </ul>
      </div>
    </li>
    `;
};

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

  loader.classList.remove('is-hidden');

  fetch(
    `https://pixabay.com/api/?key=45714704-c3295be315f324c1eb86e3dfd&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
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

      new SimpleLightbox('.js-gallery a', {
        overlayOpacity: 0.9,
        captions: true,
        captionsData: 'alt',
        captionDelay: 350,
      });

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
