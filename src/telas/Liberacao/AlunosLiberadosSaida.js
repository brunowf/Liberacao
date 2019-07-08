
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Daniel

import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/antd/dist/antd.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
// import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "../../../node_modules/mdbreact";
import '../../css/styles.css';
import "../../img/joana.jpg";









export default class AlunosLiberadosSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="App">
      <div id="page-wrap">
        <h2>Alunos Liberados Saída</h2>

        <div className="card-group">

          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/loiramaria.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Loira</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/morena.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Morena</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/neila.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Neila</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/lucas.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Maicon</p>
            </div>
          </div>
        </div>



        <div className="card-group">
          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/ronaldo.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Ronaldo</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/giovana.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Giovana</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/rose.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo Rosangela</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img alt='Imagem do aluno' src="imagens/fabrine.jpg" width="260" height="160"></img>
              <p className="card-text">Proximo fabrine</p>
            </div>
          </div>
        </div>


      </div>
    </div>

    );
  }
}




