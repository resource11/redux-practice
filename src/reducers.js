import { combineReducers } from 'redux';

const visiblePhotos = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const visibilityFilter = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  breeds,
  currentUser,
  visibilityFilter
});

export default rootReducer;
