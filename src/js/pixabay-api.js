const BASE_URL = 'https://pixabay.com/api';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45714704-c3295be315f324c1eb86e3dfd',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
