import React from 'react';
import PropTypes from 'prop-types';

class CardMusic extends React.Component {
  render() {
    const {
      albumImage,
      albumName,
      albumArtist,
    } = this.props;
    return (
      <div>
        <img src={ albumImage } alt={ albumName } />
        <span>
          {' '}
          { albumName }
          {' '}
        </span>
        <span>
          {' '}
          { albumArtist }
          {' '}
        </span>
      </div>
    );
  }
}

export default CardMusic;

CardMusic.propTypes = {
  albumImage: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  albumArtist: PropTypes.string.isRequired,
};
