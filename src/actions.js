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

export const fetchFeed = (dispatch, userId) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
    .then(response => response.json())
    .then(photos => dispatch(fetchFeedSuccess(photos)));
};

const fetchFeedSuccess = (photos) => ({
  type: 'FETCH_FEED_SUCCESS',
  photos
});

export const favoritePhoto = (photo) => ({
  type: 'FAVORITE_PHOTO',
  photo
});

export const unfavoritePhoto = (index) => ({
  type: 'UNFAVORITE_PHOTO',
  index
});

export const uploadPhoto = (photo) => ({
  type: 'UPLOAD_PHOTO',
  photo
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});