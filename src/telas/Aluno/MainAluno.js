import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import Imagem from '../../foto.jpg';
import CadastroResposavel from "./CadastroResponsavel";
import CadastroAluno from "./CadastroAluno";
import ListaAlunos from "./ListaAlunos";
import Axios from "axios";
import { urlServidor } from '../../Variaveis.json';




//Marcio
export default class MainAluno extends Component {


  alunoPost(){
    Axios.post(urlServidor + '/alunos',{
      id: null,
      nome: this.state.alunoNome,
      cpf: this.state.alunoCpf,
      }).then(resposta => {
        alert('Cadastrado com sucesso')
      }).catch(resposta => {
        alert('Não cadastrado')
      })
  }

  constructor(props){
    super(props);
    this.state = {
      alunoId: '',
      alunoNome: '',
      alunoCpf: '', 
      responsavelId: null,
      responsavelNome: '',
      responsavelCpf: '',
      responsavelEmail: '',
    }

    this.changeCampo = this.changeCampo.bind(this)
  }

  changeCampo(e) {
    alert(e.target.name +"="+ e.target.value)
  }

  render() {
    return (
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
                      <CadastroAluno change={this.changeCampo}></CadastroAluno>
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
                    <img className="foto" src={Imagem} alt="Foto do aluno"></img>
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
                    <MDBBtn color="success" className="text-xs-left" onClick={() => this.alunoPost()}>Cadastrar</MDBBtn>
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