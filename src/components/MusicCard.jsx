import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    carregando: false,
    checked: false,
  };

  async componentDidMount() {
    const { musicaObj } = this.props;
    const musicasFav = await getFavoriteSongs(musicaObj);
    if (musicasFav.some((e) => e.trackId === musicaObj.trackId)) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  handleChange = async () => {
    const { checked } = this.state;
    const { musicaObj } = this.props;

    if (checked === true) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
      this.setState({ carregando: true });
      await addSong(musicaObj);
      this.setState({ carregando: false });
    }
  };

  render() {
    const {
      musicaURL,
      musicaNome,
      musicaID,
    } = this.props;

    const { carregando, checked } = this.state;

    return (
      <div key={ musicaID }>
        { carregando ? <Loading /> : (
          <div>
            <p>{ musicaNome }</p>
            <audio data-testid="audio-component" src={ musicaURL } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>

            <label htmlFor="checkbox">
              Favorita
              <input
                data-testid={ `checkbox-music-${musicaID}` }
                type="checkbox"
                id="checkbox"
                name={ musicaID }
                checked={ checked }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        ) }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicaURL: PropTypes.string.isRequired,
  musicaNome: PropTypes.string.isRequired,
  musicaID: PropTypes.number,
  musicaObj: PropTypes.shape().isRequired,
};

MusicCard.defaultProps = {
  musicaID: '',
};

export default MusicCard;
