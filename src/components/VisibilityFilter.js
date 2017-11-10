import React from 'react';
import { connect } from 'react-redux';

import FilterLink from '../containers/FilterLink';


const Filter = ({ breeds }) => (
  <div className="filters">
    <FilterLink filter={-1} name="Favorites" />
    {
      breeds.map(breed => (<FilterLink
        filter={breed.id}
        name={breed.name}
        sublinks={breed.subBreeds}
      />))
    }
  </div>
);

const mapStateToProps = (state) => ({
  breeds: state.breeds
});

const VisibilityFilter = connect(
  mapStateToProps
)(Filter);

export default VisibilityFilter;
