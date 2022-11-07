import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <p>Sidebar</p>
        <nav>
          <Link to="/"> / </Link>
          <Link to="/search"> Search </Link>
          <Link to="/album/:id"> Album </Link>
          <Link to="/favorites"> Favorites </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/profile/edit"> ProfileEdit </Link>
        </nav>
      </section>
    );
  }
}

export default Sidebar;
