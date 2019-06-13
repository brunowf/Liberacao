import React, { Component } from "react";
import axios from 'axios';
import { MDBCardBody } from "mdbreact";
import CadastroEntrada from './CadastroEntrada.js';
import { urlServidor } from '../../Variaveis.json';
import ListaEntradas from "./ListaEntradas.js";

export default class MainEntrada extends Component {

  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>

            <MDBCardBody>
              <ListaEntradas></ListaEntradas>
              <CadastroEntrada></CadastroEntrada>
            </MDBCardBody>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    );
  }

}