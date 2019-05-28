import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import Navbarzin from './modal/Navbarzin'
//import Modalzin from './modal/Modalzin';

//Bruno
//mdbootstrap.com/docs/react/forms/basic/
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
              <MDBInput label="Nome" background icon="user" />
              <MDBInput label="Email" type="email" background icon="envelope" />
              <MDBInput label="Senha" type="password" background icon="key" />
              <MDBInput label="Telefone" type="tel" background icon="phone" />
            {/* <div className="form-check">
              <input type="checkbox" className="form-check-input" id="Check"></input>
              <label className="form-check-label" htmlFor="Check">Check me out</label>
            </div> */}
            <div className='styleBotao'>
              <MDBBtn gradient="purple">Salvar</MDBBtn>
            </div>
          </form>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}
