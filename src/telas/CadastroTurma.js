import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
//Bruno
export default class CadastroTurma extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container containerBorda'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <form className='col-sm-8 alinhandoEsquerda'>
            <h1 className='alinhandoCentro'>Cadastro de Turma</h1>
            
            <div className="form-group">
              <MDBInput label="Turma" icon="door-closed"/>
            </div>
            <div className="form-group">
              <MDBInput label="Periodo" icon="calendar-alt"/>
            </div>
            <div className="form-group">
              <MDBInput label="Duração" icon="hourglass"/>
            </div>
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
