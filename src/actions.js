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

export const fetchBreeds = (dispatch, userId) => {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(json => {
      console.log('JSON', json);
      const breedList = Object.keys(json.message);
      return breedList.map(name => ({
        name,
        id: breedList.indexOf(name),
        subBreeds: json.message[name]
      }))})
    .then(breeds => {
      console.log('BREEDS', breeds);
      dispatch(fetchBreedsSuccess(breeds));
      if (breeds.length) {
        dispatch(setVisibilityFilter(0));
        fetchBreedImages(dispatch, breeds[0]);
      }
    });
};

export const fetchBreedImages = (dispatch, breed) => {
  fetch(`https://dog.ceo/api/breed/${breed.name}/images`)
    .then(response => response.json())
    .then(json => dispatch(fetchBreedImagesSuccess(json.message)));
}

const fetchBreedsSuccess = (breeds) => ({
  type: 'FETCH_BREEDS_SUCCESS',
  breeds
});

const fetchBreedImagesSuccess = (images) => ({
  type: 'FETCH_BREED_IMAGES_SUCCESS',
  images
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
