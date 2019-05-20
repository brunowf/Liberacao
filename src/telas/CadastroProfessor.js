import React, { Component } from 'react';
//Bruno
export default class CadastroProfessor extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Professor</h1>
        </div>
      </div>
    );
  }
}
