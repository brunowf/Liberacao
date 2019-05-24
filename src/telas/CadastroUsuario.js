import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Rodrigo

export default class CadastroUsuario extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <div>
          <div id="page-wrap">
            <h1>Cadastro Usuário</h1>
          </div>
        </div>
        <div className='row alinhandoEsquerda'>
          <div className='col-sm-2'></div>
          <form className='col-sm-8'>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" className='form-control' aria-describedby="nameHelp" id='nome' placeholder='Nome'></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className='form-control' aria-describedby="emailHelp" id='email' placeholder='email'></input>
            </div>
            <div class="md-form">
              <i class="fas fa-envelope prefix"></i>
              <input type="text" id="inputIconEx1" class="form-control"></input>
              <label for="inputIconEx1">E-mail address</label>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"></input>
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input type="tel" className="form-control" id="telefone" placeholder="Telefone"></input>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="Check"></input>
              <label className="form-check-label" htmlFor="Check">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
