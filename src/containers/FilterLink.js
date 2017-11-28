import { connect } from 'react-redux';
import { setVisibilityFilter, fetchBreedImages } from '../actions';
import Link from '../components/Link';

const getLinkContent = (filter, breeds) => {
  // TODO
};

const mapStateToProps = (state, ownProps) => {
  // TODO
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
