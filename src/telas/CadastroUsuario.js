import React, { Component } from 'react';
//Rodrigo
export default class CadastroUsuario extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Usuário</h1>
        </div>
      </div>
    );
  }
}
