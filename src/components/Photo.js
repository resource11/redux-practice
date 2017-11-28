import React from 'react';

const Photo = ({url, index, isFavorite, toggleFavorite}) => (
  <div className="photo-container">
    <img className="photo" src={url} />
    <button
      className={isFavorite ? 'favorite chosen' : 'favorite'}
      onClick={e => {
        e.preventDefault();
        TODO
      }}>
      { isFavorite ? 'Favorited' : 'Favorite' }
    </button>
  </div>
);

export default Photo;
