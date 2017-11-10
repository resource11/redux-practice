import React from 'react';

const Photo = ({url, toggleFavorite}) => (
  <div className="photo-container">
    <img className="photo" src={url} />
    <button
      className={photo.isFavorite ? 'favorite chosen' : 'favorite'}
      onClick={e => {
        e.preventDefault();
        toggleFavorite(photo)
      }}>
      { photo.isFavorite ? 'Favorited' : 'Favorite' }
    </button>
  </div>
);

export default Photo;
