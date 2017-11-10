import fetch from 'isomorphic-fetch';

export const signIn = (userId, name) => {
  const photos = [];
  const favorites = [];
  return {
    type: 'SIGN_IN',
    userId,
    name,
    photos,
    favorites
  }
};

export const fetchFeed = (dispatch, id) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(response => response.json())
    .then(photos => dispatch(fetchFeedSuccess(photos)));
};

export const fetchBreedList = (dispatch, userId) => {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(json =>
      Object.keys(json.message).map(name => {
        (name, id): json.message.indexOf(name), subBreeds: json.message[name]
      }))
    .then(breeds => {
      dispatch(fetchBreedsSuccess(breeds));
      if (breeds.length) {
        dispatch(setVisibilityFilter(0));
        fetchBreedImages(dispatch, breeds[0]);
      }
    }));
};

export const fetchBreedImages = (dispatch, breed) => {
  fetch(`https://dog.ceo/api/breed/${breed.name}/images`)
    .then(response => response.json().message)
    .then(images => dispatch(fetchBreedImagesSuccess(images)));
}

const fetchFeedSuccess = (photos) => ({
  type: 'FETCH_FEED_SUCCESS',
  photos
});

const fetchBreedImagesSuccess = (photos) => ({
  type: 'FETCH_BREED_IMAGES_SUCCESS',
  photos
});

export const favoritePhoto = (photo) => ({
  type: 'FAVORITE_PHOTO',
  photo
});

export const unfavoritePhoto = (photo) => ({
  type: 'UNFAVORITE_PHOTO',
  photo
});

export const uploadPhoto = (photo) => ({
  type: 'UPLOAD_PHOTO',
  photo
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
