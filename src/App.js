import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MenuPrincipal from './telas/MenuPrincipal';
import Routes from './Routes';

export default class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div id="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}></Sidebar>
        <div id="page-wrap">
          <MenuPrincipal>

          </MenuPrincipal>
        </div>
      </div>
    );
  }
}
