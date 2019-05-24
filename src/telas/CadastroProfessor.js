import React, { Component } from 'react';
//import Modalzin from './modal/Modalzin';

//Bruno
//mdbootstrap.com/docs/jquery/forms/autocomplete/
export default class CadastroProfessor extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container containerBorda'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <form className='col-sm-8 alinhandoEsquerda'>
            <h1 className='alinhandoCentro'>Cadastro de Professor</h1>
            <div className="form-group">
              <label htmlFor='nome'>Nome:</label>
              <input type="name" className='form-control' id='nome' placeholder='nome'></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className='form-control' aria-describedby="emailHelp" id='email'placeholder='email'></input>
              <small id="emailHelp" className="form-text text-muted">Seu email nunca será compartilhado.</small>
            </div>
            <div className="form-group">
              <label htmlFor="Password">Senha:</label>
              <input type="password" className="form-control" id="Password" placeholder="senha"></input>
            </div>
            {/* <div className="form-check">
              <input type="checkbox" className="form-check-input" id="Check"></input>
              <label className="form-check-label" htmlFor="Check">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}
