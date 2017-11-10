import React from 'react';

const Photo = ({photo, toggleFavorite}) => (
  <div className="photo-container">
    <h3>{photo.title}</h3>
    <img className="photo" src={photo.url} alt={photo.title} />
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
