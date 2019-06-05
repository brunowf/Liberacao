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

          <div className="card-group">
            <div className="card bg-primary">
              <img alt='Foto do aluno' src="imagens/aluna1.jpg" width="260" height="160"></img>
              <div className="card-body text-center">
                <p className="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div className="card bg-warning">
              <div className="card-body text-center">
                <img alt='Foto do aluno' src="imagens/eduardo.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div className="card bg-success">
              <div className="card-body text-center">
                <img alt='Foto do aluno' src="imagens/aluna3.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div className="card bg-danger">
              <div className="card-body text-center">
                <img alt='Foto do aluno' src="imagens/aluna4.jpg" width="260" height="160"></img>
                <p className="card-text">Proximo aluno liberado</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}


