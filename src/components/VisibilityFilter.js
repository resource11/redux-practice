import React from 'react';
import { connect } from 'react-redux';

import FilterLink from '../containers/FilterLink';


const Filter = ({ breeds }) => (
  // TODO
);

const mapStateToProps = (state) => ({
  // TODO
});

const VisibilityFilter = connect(
  mapStateToProps
)(Filter);

export default VisibilityFilter;
