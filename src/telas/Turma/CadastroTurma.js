import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBCardBody, MDBCardTitle } from "mdbreact";
//Bruno
export default class CadastroTurma extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <MDBCardTitle>Cadastro de Turma</MDBCardTitle>
        <MDBInput label="Turma" background icon="door-closed" />
        <MDBInput label="Periodo" background icon="calendar-alt" />
        <MDBInput label="Duração" background icon="hourglass" />
        <div className='tyleBotao'>
          <MDBBtn className="dusty-grass-gradient">Salvar</MDBBtn>
        </div>
      </form>
    );
  }
}
