import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBCardBody, MDBCardTitle } from "mdbreact";
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
      <div className='container containerBorda' style={ {marginTop:60, marginBottom:60 }}>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8 alinhandoEsquerda z-depth-3'>
            <MDBCardBody>
              <form>
                  <MDBCardTitle>Cadastro de Professor</MDBCardTitle>
                  <MDBInput label="Nome" background icon="user" />
                  <MDBInput label="Email" type="email" background icon="envelope" />
                  <MDBInput label="Senha" type="password" background icon="key" />
                  <MDBInput label="Telefone" type="tel" background icon="phone" />
                <div className='tyleBotao'>
                  <MDBBtn className="dusty-grass-gradient">Salvar</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}
