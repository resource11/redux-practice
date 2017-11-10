import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';
import { fetchFeed, favoritePhoto, unfavoritePhoto } from '../actions';

class Breeds extends Component {
  componentWillMount(props) {
    this.props.fetchBreeds();
  }
  render() {
    const { photos, onToggleFavoritePhoto } = this.props;
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
    case -1:
      return state.currentUser.favorites.map(photo => photo.isFavorite = true);
    default:
      return state.photos;
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

const VisibleBreeds = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default VisibleBreeds;
