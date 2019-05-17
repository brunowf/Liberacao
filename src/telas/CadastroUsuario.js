import React from 'react';
import Sidebar from '../Sidebar';

export default class CadastroUsuario extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div id="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}></Sidebar>
        <div id="page-wrap">
          <h1>Cadastro</h1>
        </div>
      </div>
    );
  }
}
