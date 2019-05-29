import React, { Component } from "react";
import axios from 'axios';
import { MDBCardBody } from "mdbreact";
import CadastroProfessor from './CadastroProfessor.js';
import { urlServidor } from '../../Variaveis.json';
import ListaProfessores from "./ListaProfessores.js";




export default class MainProfessor extends Component {

  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>

            <MDBCardBody>
              <ListaProfessores></ListaProfessores>
              <CadastroProfessor></CadastroProfessor>
            </MDBCardBody>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    );
  }

}