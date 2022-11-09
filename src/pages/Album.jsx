import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    nomeArtista: '',
    nomeAlbum: '',
    infosAlbum: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const albumSelecionado = await getMusics(id);
    this.setState({
      infosAlbum: albumSelecionado,
      nomeArtista: albumSelecionado[0].artistName,
      nomeAlbum: albumSelecionado[0].collectionName,
    });
  }

  render() {
    const { nomeArtista, nomeAlbum, infosAlbum } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">{ nomeArtista }</p>
        <p data-testid="album-name">{ nomeAlbum }</p>
        { console.log(infosAlbum) }
        <MusicCard infosAlbum={ infosAlbum } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Album;
