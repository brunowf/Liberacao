import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { MDBInput, MDBBtn} from "mdbreact";
//Rodrigo

export default class CadastroUsuario extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className='alinhandoEsquerda'>
          <MDBInput label="Nome Completo" background icon="user" group type="text" id='nome' />
          <MDBInput label="E-mail" background icon="envelope" color="success" group type='email' id='email' />
          <MDBInput label="Senha" background icon="key" group type='password' id='senha' />
          <MDBInput label="Telefone / WhatsApp" background icon="phone" group type='tel' id='telefone' />

          <div>
            <select className="custom-select custom-select-lg mb-5" id="categoria" defaultValue="1">
              <option disabled value="1">Tipo de Usuário</option>
              <option value="2">Administrador</option>
              <option value="3">Guarda</option>
            </select>
          </div>

        </form>
        <MDBBtn color="success" className="text-xs-left">Salvar</MDBBtn>
      </div>
    );
  }
}