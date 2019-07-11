import React, { Component } from '../../../node_modules/react';
//Rodrigo
export default class AlunosLiberadosEntrada extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h2>Alunos Liberados Entrada</h2>

          <div className="card-group">

            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/loiramaria.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Nayala</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/morena.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Morena</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/neila.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Neila</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/fabrine.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Fabrine</p>
              </div>
            </div>
          </div>



          <div className="card-group">
            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/ronaldo.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Ronaldo </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/giovana.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Giovana</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/rose.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Rosangela</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <img alt='Imagem do aluno' src="imagens/lucas.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo Maicon</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    );
  }
}


