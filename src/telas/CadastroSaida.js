import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/searchBar.css';
import { MDBInput, MDBBtn, MDBDatePicker } from "mdbreact";


//Marcelo
export default class CadastroSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div id="page-wrap">
          <h1>Cadastro Saída</h1>
          <div className='container'>
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">


                    <br />

                    <form className="alinhandoEsquerda">
                    <MDBInput label="Nome" background icon="user" />
                    </form>

                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02" defaultValue="0">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02" defaultValue="0">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                      <label className="form-check-label" for="gridCheck1">
                        <strong className="d-inline-block mb-2 text-success">Notificar responsável</strong>
                      </label>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02" defaultValue="0">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02" defaultValue="0">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <div className="form-check">
                      <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />



                      <label className="form-check-label" for="gridCheck1">
                        <strong className="d-inline-block mb-2 text-success">Notificar professor</strong>
                      </label>
                    </div>

                    
                  </div>

                </div>
              </div>






              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">

                        <div className='alinhandoEsquerda'>
                          <MDBInput label="Nome" type="date" background icon="calendar" />
                        </div>
                        {/*<script type="text/javascript">
                          $(function () {
                            $('#datetimepicker1').datetimepicker();
                          });
                        </script>*/}

                    <br />
                    <div className="input-group mb-3">
                      
                    <select className="custom-select custom-select-lg mb-5" id="categoria" defaultValue="1">
                      <option disabled value="1">Tipo de Usuário</option>
                      <option value="2">Administrador</option>
                      <option value="3">Guarda</option>
                    </select>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02" defaultValue="0">
                        <option value="0" disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <div className="form-check">
                      <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                      <label className="form-check-label" for="gridCheck1">
                        <strong className="d-inline-block mb-2 text-success">Example</strong>
                      </label>
                    </div>
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
