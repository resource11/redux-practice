import React from 'react';

const Photo = ({photo, toggleFavorite}) => (
  <div className="photo-container">
    <h3>{photo.name}</h3>
    <img className="photo" src={photo.url} alt={photo.name} />
    <button
      className={photo.isFavorite ? 'favorite chosen' : 'favorite'}
      onClick={toggleFavorite.bind(photo)}>
      Favorite
    </button>
  </div>
);

export default Photo;
