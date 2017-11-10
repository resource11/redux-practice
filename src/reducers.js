import { combineReducers } from 'redux';

const feed = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_FEED_SUCCESS':
      return action.photos;
    default:
      return state;
  }
};

const currentUser = (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        userId: action.userId,
        name: action.name,
        photos: action.photos,
        favorites: []
      };
    case 'FAVORITE_PHOTO':
      return { ...state, favorites: [ ...state.photos, action.photo ] };
    case 'UNFAVORITE_PHOTO':
      return { ...state, favorites:
        [ ...state.photos.slice(0, action.index),
          ...state.photos.slice(action.index + 1) ] };
    case 'UPLOAD_PHOTO':
      return {
        ...state, photos: [ ...state.photos, action.photo ]
      };
    default:
      return state;
  }
};

const visibilityFilter = (state = 0, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  feed,
  currentUser,
  visibilityFilter
});

export default rootReducer;
