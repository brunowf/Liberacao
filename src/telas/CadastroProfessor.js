import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Bruno
//https://mdbootstrap.com/docs/jquery/forms/autocomplete/
export default class CadastroProfessor extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <div className='row alinhandoEsquerda'>
          <div className='col-sm-2'></div>
          <form className='col-sm-8'>
            <div>
              <label>Email:</label>
              <input type="email" className='form-control' aria-describedby="emailHelp" id='email'placeholder='email'></input>
              <small id="emailHelp" className="form-text text-muted">Seu email nunca será compartilhado.</small>
            </div>
            <div className="form-group">
              <label for="Password">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Password"></input>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="Check"></input>
              <label className="form-check-label" for="Check">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}
