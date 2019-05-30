import React, { Component } from '../../../node_modules/react';
//Daniel
export default class AlunosLiberadosEntrada extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Alunos Liberados Entrada</h1>
        </div>
      </div>
    );
  }
}
