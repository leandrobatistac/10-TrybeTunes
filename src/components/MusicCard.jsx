import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const {
      infosAlbum,
    } = this.props;
    const album = infosAlbum;
    return (
      <>
        { album.filter((obj) => obj.previewUrl).map((musica) => (
          <div key={ musica.trackId }>
            <p>{ musica.trackName }</p>
            <audio data-testid="audio-component" src={ musica.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
          </div>
        )) }
      </>
    );
  }
}

MusicCard.propTypes = {
  infosAlbum: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  })).isRequired,
};

export default MusicCard;
