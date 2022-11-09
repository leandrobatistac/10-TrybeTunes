import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
      pesquisarArtista: '',
      carregando: false,
      artistaPesquisado: '',
      objetoAlbuns: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.pesquisarAlbum = this.pesquisarAlbum.bind(this);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    const tamanho = 2;
    if (value.length >= tamanho) {
      this.setState({ botaoDisable: false });
    } else {
      this.setState({ botaoDisable: true });
    }
  };

  pesquisarAlbum = async () => {
    this.setState({ carregando: true });
    const { pesquisarArtista } = this.state;
    const albunsPesquisados = await searchAlbumsAPI(pesquisarArtista);
    this.setState({
      pesquisarArtista: '',
      carregando: false,
      artistaPesquisado: pesquisarArtista,
      objetoAlbuns: albunsPesquisados,
    });
  };

  render() {
    const {
      botaoDisable,
      pesquisarArtista,
      carregando,
      artistaPesquisado,
      objetoAlbuns,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />

        { carregando
          ? <Loading />
          : (
            <form>
              <input
                data-testid="search-artist-input"
                id="pesquisar-artista"
                name="pesquisarArtista"
                onChange={ this.handleChange }
                value={ pesquisarArtista }
              />

              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ botaoDisable }
                onClick={ this.pesquisarAlbum }
              >
                Pesquisar
              </button>
            </form>
          )}

        { objetoAlbuns.length > 0
          ? (
            <>
              <span>{ `Resultado de álbuns de: ${artistaPesquisado}` }</span>
              { objetoAlbuns.map((album) => (
                <div key={ album.collectionId }>
                  <Link
                    to={ `album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    {album.collectionName}
                  </Link>
                  <img src={ album.artworkUrl100 } alt={ album.collectionId } />
                </div>
              ))}
            </>
          ) : <span> Nenhum álbum foi encontrado </span>}
      </div>
    );
  }
}

export default Search;
