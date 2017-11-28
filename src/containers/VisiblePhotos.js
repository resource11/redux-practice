import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../components/Photo';

class Photos extends Component {
  render() {
    const { photos, onToggleFavoritePhoto } = this.props;
    return (
      <div className="visible-feed">
        { photos.map((photo, index) => (<Photo />
          )
        ) }
      </div>
    );
  }
}

const getVisiblePhotos = (state) => {
  // TODO
};

const mapStateToProps = state => {
  // TODO
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO
};

const VisiblePhotos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);

export default VisiblePhotos;
