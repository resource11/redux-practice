import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';
import { fetchFeed, favoritePhoto } from '../actions';

class Feed extends Component {
  componentWillMount(props) {
    this.props.fetchFeed();
  }
  render() {
    const { photos, onFavoritePhoto } = this.props;
    return (
      <div className="visible-feed">
        { photos.map(photo =>
          (<Photo
            key={photo.id}
            photo={photo}
            toggleFavorite={onFavoritePhoto}
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
      console.log(state);
      return state.currentUser && state.currentUser.favorites ?
        state.feed.map(photo => photo.isFavorite ===
          state.currentUser.favorites.includes(photo)) : state.feed;
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
    onFavoritePhoto: photo => dispatch(favoritePhoto(photo))
  }
};

const VisibleFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default VisibleFeed;
