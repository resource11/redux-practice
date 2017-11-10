import React from 'react';
import FilterLink from '../containers/FilterLink';

const Filter = () => (
  <div className="filters">
    <FilterLink filter={0} name="Feed" />
    <FilterLink filter={1} name="My photos" />
    <FilterLink filter={2} name="Favorites" />
  </div>
);

export default Filter;
