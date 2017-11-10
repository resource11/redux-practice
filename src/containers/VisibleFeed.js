import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';
import { fetchFeed, favoritePhoto } from '../actions';

class Feed extends Component {
  componentWillMount(props) {
    this.props.fetchFeed();
  }
  render() {
    const { photos } = this.props;
    return (
      <div class="visible-feed">
        { photos.map(photo => (<Photo photo={photo} />)) }
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
      return state.feed.map(photo => photo.isFavorite = state.favorites.includes(photo));
  }
};

const mapStateToProps = state => {
  return {
    photos: getVisiblePhotos(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: () => {
      fetchFeed(dispatch);
    },
    onFavoritePhoto: photo => {
      dispatch(favoritePhoto(photo));
    }
  }
};

const VisibleFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default VisibleFeed;
