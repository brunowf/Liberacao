import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBCardBody, MDBCardTitle } from "mdbreact";
//Bruno
export default class CadastroTurma extends Component {
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
          <MDBCardTitle>Cadastro de Turma</MDBCardTitle>
            <form>
                <MDBInput label="Turma" background icon="door-closed"/>
                <MDBInput label="Periodo" background icon="calendar-alt"/>
                <MDBInput label="Duração" background icon="hourglass"/>
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
