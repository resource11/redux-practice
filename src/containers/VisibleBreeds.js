import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';
import { fetchBreeds, favoritePhoto, unfavoritePhoto } from '../actions';

class Breeds extends Component {
  componentWillMount(props) {
    this.props.fetchBreeds();
  }
  render() {
    const { photos, onToggleFavoritePhoto } = this.props;
    return (
      <div className="visible-feed">
        { photos.map((photo, index) => (<Photo
            key={index}
            url={photo.url}
            isFavorite={photo.isFavorite}
            index={index}
            toggleFavorite={onToggleFavoritePhoto}
            />
          )
        ) }
      </div>
    );
  }
}

const getVisiblePhotos = (state) => {
  console.log(state);
  switch(state.filter) {
    case -1:
      return state.currentUser.favorites;
    case -2:
      return state.allPhotos;
    default:
      return state.feed.map(url => ({
        url,
        isFavorite: false
      }));
  }
};

const mapStateToProps = state => {
  return {
    photos: getVisiblePhotos(state)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBreeds: () => fetchBreeds(dispatch),
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
)(Breeds);

export default VisibleBreeds;
