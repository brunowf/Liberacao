import React, { Component } from 'react';
//Daniel
export default class AlunosLiberadosSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Alunos Liberados Saida</h1>
        </div>
      </div>
    );
  }
}
