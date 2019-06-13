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
          <h2>Alunos Liberados Entrada</h2>

          <div class="card-group">

            <div class="card">
              <div class="card-body text-center">
                <img src="imagens/loiramaria.jpg" width="260" height="160"></img>
                <p class="card-text">Proximo Nayala</p>
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
                <img src="imagens/fabrine.jpg" width="260" height="160"></img>
                <p class="card-text">Proximo Fabrine</p>
              </div>
            </div>
          </div>



          <div class="card-group">
            <div class="card">
              <div class="card-body text-center">
                <img src="imagens/ronaldo.jpg" width="260" height="160"></img>
                <p class="card-text">Proximo Ronaldo </p>
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
                <img src="imagens/lucas.jpg" width="260" height="160"></img>
                <p class="card-text">Proximo Maicon</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    );
  }
}


