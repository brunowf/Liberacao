import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBCardTitle } from "mdbreact";
// import { DatePicker } from 'antd/lib/date-picker';
//import Modalzin from './modal/Modalzin';

//Bruno
//mdbootstrap.com/docs/react/forms/basic/
export default class CadastroProfessor extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
