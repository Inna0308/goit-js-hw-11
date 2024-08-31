export const galleryTemplate = imgInfo => {
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
