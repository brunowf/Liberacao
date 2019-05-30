<<<<<<< HEAD
import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {MDBBtn, MDBRow, MDBCol} from "mdbreact";
import Imagem from '../../foto.jpg';
import CadastroResposavel from "./CadastroResponsavel";
import CadastroAluno from "./CadastroAluno";
import ListaAlunos from "./ListaAlunos"
=======
import React, { Component } from "react";
import axios from 'axios';
import { MDBCardBody } from "mdbreact";
import CadastroAluno from './CadastroAluno.js';
import { urlServidor } from '../../Variaveis.json';
import ListaAlunos from "./ListaAlunos.js";
>>>>>>> ef9e3ba717e9076be80238c8d230d76261596c5f




export default class MainProfessor extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div id="App">
        <div id="page-wrap">
          <h1>Aluno</h1>
          <div className="container" style={{ marginBottom: 30, marginTop: 30 }}>
            <ListaAlunos></ListaAlunos>
            <div className="row">
              <div className="col">
                <form className="alinhandoEsquerda">
                  <div className="card">
                    <div className="card-body">
                      <CadastroAluno></CadastroAluno>
                    </div>
                  </div>
                  <div className="card" style={{ marginBottom: 30 }}>
                    <div className="card-body">
                      <CadastroResposavel></CadastroResposavel>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <img className="foto" alt="Foto do aluno cadastrado" src={Imagem}></img>
                  </div>
                  <div>
                    <MDBBtn color="success" className="text-xs-left"><i className="fas fa-camera"></i></MDBBtn>
                  </div>
                  <br></br>
                  <div>
                    <MDBRow>
                      <MDBCol size="2"></MDBCol>
                      <MDBCol size="8">
                        <select className="custom-select custom-select-lg mb-5" id="Turma" defaultValue="1">
                          <option disabled value="1">Turma</option>
                          <option value="2">Assinstente Administrativo</option>
                          <option value="3">Logistica industrial</option>
                        </select>
                      </MDBCol>
                      <MDBCol size="2"></MDBCol>
                    </MDBRow>
                  </div>
                  <br></br>
                  <div>
                    <MDBBtn color="success" className="text-xs-left">Cadastrar</MDBBtn>
                  </div>
                </div>
              </div>
            </div>
=======
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>

            <MDBCardBody>
              <ListaAlunos></ListaAlunos>
              <CadastroAluno></CadastroAluno>
            </MDBCardBody>
>>>>>>> ef9e3ba717e9076be80238c8d230d76261596c5f
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    );
  }

}