import React, { Component, Image } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Imagem from '../foto.jpg';



//Marcio
export default class CadastroAluno extends Component {
  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Aluno</h1>
          <div className="container" style={{ marginBottom: 30, marginTop: 30 }}>
            <div className="row">
              <div className="col">
                <form className="alinhandoEsquerda">
                  <div className="card">
                    <div className="card-body">

                      <div className="form-group">
                        <MDBInput label="CPF" type="text" background icon="user" />
                      </div>

                      <div className="form-group">
                        <MDBInput label="Nome" type="text" background icon="user" />
                      </div>

                      <div className="form-group">
                        <MDBInput label="Data" type="date" background icon="calendar-day" />
                      </div>

                    </div>
                  </div>


                  <div className="card" style={{ marginBottom: 30 }}>
                    <div className="card-body">

                      <div className="form-group">
                        <MDBInput label="CPF responsável" type="text" background icon="user" />
                      </div>

                      <div className="form-group">
                        <MDBInput label="Nome responsável" type="text" background icon="user" />
                      </div>

                      <div >
                        <MDBInput label="Email responsável" type="text" background icon="envelope" />
                      </div>

                    </div>
                  </div>
                </form>

              </div>
              <div className="col">
                <div className="card">

                  <div className="card-body">
                    <img className="foto" src={Imagem}></img>
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
          </div>
        </div>
      </div>
    );
  }
}