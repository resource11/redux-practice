import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';
import { fetchFeed, favoritePhoto, unfavoritePhoto } from '../actions';

class Feed extends Component {
  componentWillMount(props) {
    this.props.fetchFeed();
  }
  render() {
    const { photos, onToggleFavoritePhoto } = this.props;
    console.log('photos', photos);
    return (
      <div className="visible-feed">
        { photos.map(photo => (<Photo
            key={photo.id}
            photo={photo}
            toggleFavorite={onToggleFavoritePhoto}
            />
          )
        ) }
      </div>
    );
  }
}

const getVisiblePhotos = (state) => {
  switch(state.filter) {
    case 1:
      return state.currentUser.photos.map(photo =>
        photo.isFavorite = state.favorites.includes(photo));
    case 2:
      return state.currentUser.favorites.map(photo => photo.isFavorite = true);
    case 0:
    default:
      return state.feed.map(photo => ({ ...photo, isFavorite:
          state.currentUser.favorites.includes(photo) }));
  }
};

const mapStateToProps = state => {
  return {
    photos: getVisiblePhotos(state)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeed: () => fetchFeed(dispatch, ownProps.userId),
    onToggleFavoritePhoto: (photo) => {
      // Remove isFavorite property because it is view-only
      const originalPhoto = { ...photo, isFavorite: undefined };
      if (photo.isFavorite) {
        dispatch(unfavoritePhoto(originalPhoto));
      } else {
        dispatch(favoritePhoto(originalPhoto));
      }
    }
  }
};

const VisibleFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default VisibleFeed;
