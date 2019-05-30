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
          <div class="card bg-primary">
          <img src="imagens/eduardo.jpg"></img>
            <div class="card-body text-center">
              <p class="card-text">Proximo aluno liberado</p>
              
            </div>
          </div>
          <div class="card-group">
          <div class="card bg-warning">
            <div class="card-body text-center">
            <img src="imagens/aluna1.jpg"></img>
              <p class="card-text">Proximo aluno liberado</p>
            </div>
          </div>
          <div class="card bg-success">
            <div class="card-body text-center">
            <img src="imagens/aluna3.jpg"></img>
              <p class="card-text">Proximo aluno liberado</p>
            </div>
          </div>
          <div class="card bg-danger">
            <div class="card-body text-center">
            <img src="imagens/aluna3.jpg"></img>
               <p class="card-text">Proximo aluno liberado</p>
               </div>
            </div>
      
        </div>
     </div>
        </div>
      </div>
    );
  }
}

        
