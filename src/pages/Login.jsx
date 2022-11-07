import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
      carregando: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.salvarUsuario = this.salvarUsuario.bind(this);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    const tamanho = 3;
    if (value.length >= tamanho) {
      this.setState({ botaoDisable: false });
    } else {
      this.setState({ botaoDisable: true });
    }
  };

  salvarUsuario = async () => {
    const { loginInput } = this.state;
    const { history } = this.props;
    this.setState({ carregando: true });
    await createUser({
      name: loginInput,
    });
    this.setState({ carregando: false });
    history.push('/search');
  };

  render() {
    const { botaoDisable, carregando } = this.state;
    return (
      <div data-testid="page-login">
        <p>Login</p>

        { carregando
          ? <Loading />
          : (
            <form>
              <label htmlFor="login-input">
                Nome
                <input
                  data-testid="login-name-input"
                  id="login-input"
                  name="loginInput"
                  onChange={ this.handleChange }
                />
              </label>

              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ botaoDisable }
                onClick={ this.salvarUsuario }
              >
                Entrar
              </button>
            </form>
          )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
