import React from 'react';

const Photo = ({photo, toggleFavorite}) => (
  <div class="photo">
    <h3>{photo.name}</h3>
    <img src={photo.src} alt={photo.name} />
    <button
      class={photo.isFavorite ? 'favorite chosen' : 'favorite'}
      onClick={toggleFavorite.bind(photo)}>
      Favorite
    </button>
  </div>
);

export default Photo;
