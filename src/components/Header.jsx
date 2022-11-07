import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <p>Header</p>
        <nav>
          <Link to="/"> / </Link>
          <Link to="/search"> Search </Link>
          <Link to="/album/:id"> Album </Link>
          <Link to="/favorites"> Favorites </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/profile/edit"> ProfileEdit </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
