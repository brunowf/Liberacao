import React, { Component } from 'react';
//Bruno
export default class CadastroTurma extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Turma</h1>
        </div>
      </div>
    );
  }
}
