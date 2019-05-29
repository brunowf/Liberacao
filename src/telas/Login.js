import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Daniel





export default class Login extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <div className='row alinhandoEsquerda'>
          <div className='col-sm-2'></div>
          <form className='col-sm-8'>
            
           <h1>  Login   </h1>
            
            <div> 
              
              <label>E-mail:</label>
              <input type="Email" className='form-control' aria-describedby="emailHelp" id='email'placeholder='email'></input>
              <small id="Email" className="form-text text-muted">Digite Seu E-mail: .</small>
            </div>
            <div className="form-group">
              <label htmlFor="E-mail">Senha</label>
              <input type="Senhar" className="form-control" id="Senhar" placeholder="Senhar"></input>
              <small id="Senhar" className="form-text text-muted">Digite Sua senhar: .</small>
            </div>
                    
        
            <button type="submit" className="btn btn-primary">Enter</button>
          </form>
          <div className='col-sm-2'></div>
          </div>
                </div>
    );
  }
}
