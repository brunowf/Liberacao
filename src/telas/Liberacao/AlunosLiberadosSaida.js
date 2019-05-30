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
      <div className='container'>
        <h2>Alunos liberado para saida</h2>
       
         <div class="card-group">
            <div class="card bg-primary">
              <img src="imagens/aluna1.jpg"width="260" height="160"></img>
              <div class="card-body text-center">
                 <p class="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div class="card bg-primary">
              <img src="imagens/eduardo.jpg"width="260" height="160"></img>
              <div class="card-body text-center">
                 <p class="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div class="card bg-primary">
              <img src="imagens/aluna3.jpg"width="260" height="160"></img>
              <div class="card-body text-center">
                 <p class="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div class="card bg-danger">
            <div class="card-body text-center">
            <img src="imagens/aluna4.jpg"width="260" height="160"></img>
               <p class="card-text">Proximo aluno liberado</p>
               </div>
            </div>
          </div>
    </div>
   );
 }
}

