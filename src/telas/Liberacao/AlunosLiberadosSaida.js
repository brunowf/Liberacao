import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Daniel
export default class AlunosLiberadosSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
      <div id="page-wrap">
        <h2>Alunos Liberados Saída</h2>

        <div class="card-group">

          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/loiramaria.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Loira</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/morena.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Morena</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/neila.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Neila</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/lucas.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Maicon</p>
            </div>
          </div>
        </div>



        <div class="card-group">
          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/ronaldo.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Ronaldo</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/giovana.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Giovana</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/rose.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo Rosangela</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <img src="imagens/fabrine.jpg" width="260" height="160"></img>
              <p class="card-text">Proximo fabrine</p>
            </div>
          </div>
        </div>


      </div>
    </div>

    );
  }
}

