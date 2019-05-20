import React, { Component } from 'react';
//Daniel
export default class Login extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Login</h1>
        </div>
      </div>
    );
  }
}
