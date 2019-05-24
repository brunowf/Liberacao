import React, { Component, Image } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Imagem from '../foto.jpg';



//Marcio
export default class CadastroAluno extends Component {
  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Cadastro Aluno</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <form>
                  <div className="card">
                    <div className="card-body">
                      
                      <div className="form-group">
                        <input className="from-Control " placeholder="CPF"></input><i className="fas fa-user tamanhoIcone"></i>
                      </div>
                      
                      <div className="form-group">
                        <input className="from-Control " placeholder="Nome"></input><i className="fas fa-user tamanhoIcone"></i>
                      </div>

                      <div className="form-group">
                        <input type="date" className="from-Control" ></input><i className="fas fa-calendar-week tamanhoIcone"></i>
                      </div>

                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      
                      <div className="form-group">
                        <input className="from-Control" placeholder="CPF Resp"></input><i className="fas fa-user tamanhoIcone"></i>
                      </div>

                      <div className="form-group">
                        <input className="from-Control" placeholder="Nome Resp"></input><i className="fas fa-user tamanhoIcone"></i>
                      </div>

                      <div >
                        <input className="from-Control" placeholder="Email Resp"></input><i className="fas fa-envelope tamanhoIcone"></i>
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
                    <a href="#" className="btn btn-info"><i className="fas fa-camera"></i></a>
                  </div>

                  <br></br>

                  <div>
                    <select className="custom-select tamanhaSelect" id="CadastroTurma">
                      <option selected>Selecionar Turma</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <br></br>

                  <div>
                    <a href="#" className="btn btn-info">CADASTRAR</a>
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