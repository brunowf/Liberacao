import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MainUser from './User/MainUser';
//Rodrigo

export default class CadastroUsuario extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <MDBContainer>
        <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
          <MDBRow>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="10" md="10" lg="10" className="mx-auto float-none white z-depth-3 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Lista de Usuários</MDBCardTitle>

                <MainUser></MainUser>

              </MDBCardBody>
            </MDBCol>
            <MDBCol size="1"></MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
          <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8" md="8" lg="8" className="mx-auto float-none white z-depth-3 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Cadastro de Usuário</MDBCardTitle>
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
              </MDBCardBody>
            </MDBCol>
            <MDBCol size="2"></MDBCol>
          </MDBRow>
        </MDBContainer>


      </MDBContainer>
    );
  }
}