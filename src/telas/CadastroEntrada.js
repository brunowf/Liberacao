import React, { Component } from 'react';
//Marcelo
export default class CadastroEntrada extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Entrada</h1>
        </div>
      </div>
    );
  }
}
