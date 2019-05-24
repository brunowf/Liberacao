import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
  "mdbreact";
//Rodrigo

export default class CadastroUsuario extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (



        <MDBContainer className="mt-3">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
                <MDBCardBody>
                  <MDBCardTitle>Material Design Edge Headers</MDBCardTitle>
                  <p className="pb-4">Example of Material Design Form</p>
                  <form>
                    <MDBInput label="Nome Completo" background icon="user" group type="text" id='nome' />
                    <MDBInput label="E-mail" background icon="envelope" group type='email' id='email' />
                    <MDBInput label="Senha" background icon="key" group type='password' id='senha' />
                    <MDBInput label="Telefone / WhatsApp" background icon="phone" group type='tel' id='telefone' />

                    <MDBBtn color="mdb-color" className="text-xs-left">Salvar</MDBBtn>
                  </form>
                  <div className="my-2">
                    <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>Never submit your passwords here</p>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBContainer>
    );
  }
}
