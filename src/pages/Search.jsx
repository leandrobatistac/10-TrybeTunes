import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { botaoDisable } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            id="pesquisar-artista"
            name="pesquisarArtista"
            onChange={ this.handleChange }
          />

          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ botaoDisable }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
