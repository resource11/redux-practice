import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const getLinkContent = filter => {
  switch(filter) {
    case -1:
      return 'Favorites';
    case -2:
      return 'All';
    default:
      return state.breeds[filter].name;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
    children: getLinkContent(ownProps.filter)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
