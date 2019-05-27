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
        <div class="container">
          <h2>Alunos liberado para saida</h2>
          
          <div class="card-group">
            <div class="card bg-primary">
            <img src='https://i.pinimg.com/originals/b6/6d/bd/b66dbd1d1a8e9810716d8b29cf2e9d6b.jpg'></img>
              <div class="card-body text-center">
                <p class="card-text">Proximo aluno liberado</p>
                
              </div>
            </div>
            <div class="card-group">
            <div class="card bg-warning">
              <div class="card-body text-center">
              <img src='https://i.pinimg.com/originals/b6/6d/bd/b66dbd1d1a8e9810716d8b29cf2e9d6b.jpg'></img>
                <p class="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div class="card bg-success">
              <div class="card-body text-center">
              <img src='https://i.pinimg.com/originals/b6/6d/bd/b66dbd1d1a8e9810716d8b29cf2e9d6b.jpg'></img>
                <p class="card-text">Proximo aluno liberado</p>
              </div>
            </div>
            <div class="card bg-danger">
              <div class="card-body text-center">
              <img src='https://i.pinimg.com/originals/b6/6d/bd/b66dbd1d1a8e9810716d8b29cf2e9d6b.jpg'></img>
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