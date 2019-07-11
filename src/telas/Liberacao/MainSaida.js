import React, { Component } from "react";
import axios from 'axios';
import { MDBCardBody } from "mdbreact";
import CadastroSaida from './CadastroSaidas.js';
import { urlServidor } from '../../Variaveis.json';
import ListaSaidas from "./ListaSaidas.js";
// Marcelo

export default class MainSaida extends Component {

  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>

            <MDBCardBody>
              <ListaSaidas></ListaSaidas>
              <CadastroSaida></CadastroSaida>
            </MDBCardBody>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    );
  }

}