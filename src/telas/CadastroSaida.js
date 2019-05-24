import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/searchBar.css';


//Marcelo
export default class CadastroSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Saída</h1>
          <div className='container'>
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">


                    <br />

                    <form className="form-inline">
                      <i className="fas fa-search" aria-hidden="false"></i>
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    </form>

                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
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
                        <option selected>Choose...</option>
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
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                      <label class="form-check-label" for="gridCheck1">
                        <strong class="d-inline-block mb-2 text-success">Notificar responsável</strong>
                      </label>
                    </div>


                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
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
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <div class="form-check">
                      <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />



                      <label class="form-check-label" for="gridCheck1">
                        <strong class="d-inline-block mb-2 text-success">Notificar professor</strong>
                      </label>
                    </div>

                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>

                </div>
              </div>






              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">








                    <div className="container">
                      <div className="row">
                        <div className='col-sm-6'>
                          <div className="form-group">
                            <div className='input-group date' id='datetimepicker1'>
                              <input type='text' className="form-control" />
                              <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/*<script type="text/javascript">
                          $(function () {
                            $('#datetimepicker1').datetimepicker();
                          });
                        </script>*/}
                      </div>
                    </div>

                    <br />
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
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
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                      </div>
                    </div>


                    <div class="form-check">
                      <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                      <label class="form-check-label" for="gridCheck1">
                        <strong class="d-inline-block mb-2 text-success">Example</strong>
                      </label>
                    </div>

                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-muted">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
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
