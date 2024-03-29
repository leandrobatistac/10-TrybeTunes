import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    carregando: false,
    usuarioLogado: {},
  };

  async componentDidMount() {
    this.setState({ carregando: true });
    const usuario = await getUser();
    this.setState({
      usuarioLogado: usuario,
      carregando: false,
    });
  }

  render() {
    const { carregando, usuarioLogado } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          { carregando
            ? <Loading />
            : (
              <p data-testid="header-user-name">
                { usuarioLogado.name }
              </p>
            )}
          <Link to="/search" data-testid="link-to-search"> Search </Link>
          <Link to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
          <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
