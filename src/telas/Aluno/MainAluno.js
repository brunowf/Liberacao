import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { MDBBtn, MDBRow, MDBCol, MDBInput } from "mdbreact";
import Imagem from '../../foto.jpg';
// import CadastroResposavel from "./CadastroResponsavel";
import CadastroAluno from "./CadastroAluno";
import ListaAlunos from "./ListaAlunos";
import api from '../../services/api';
import { urlServidor } from '../../Variaveis.json';




//Marcio
export default class MainAluno extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aluno: {
        id: null,
        nome: '',
        cpf: '',
      },
      id: null,
      listaTurmas: [],
      nome: 'nuuhj',
      email: 'gyugy',
      responsavel: {
        id: null,
        nome: '',
        email: '',
      },
      turmaIdSlc: null,
    }

    this.changeAluno = this.changeAluno.bind(this)
    // this.changeResponsavel = this.changeResponsavel.bind(this)
  }

  componentDidMount = async e => {
    api.get(urlServidor + '/turmas')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaTurmas: resposta.data })
        let data = null
        data = resposta.data
        console.log(data)
        this.setState({ listaTurmas: data })
        console.log(this.state.listaTurmas)

      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }

  alunoPost() {
    api.post(urlServidor + '/alunos', {
      id: null,
      nome: this.state.aluno.nome,
      cpf: this.state.aluno.cpf,
      turmas: [
        {
          "id": this.state.turmaIdSlc
        }
      ]
    }).then(resposta => {
      alert('Cadastrado com sucesso')
    }).catch(resposta => {
      alert('Não cadastrado')
    })
  }

  responsavelPost() {
    api.post(urlServidor + '/responsavel', {
      id: null,
      nome: this.state.nome,
      email: this.state.email,
      cpf: this.state.cpf,
    }).then(resposta => {
      alert('Cadastrado sucesso')
    }).catch(resposta => {
      alert('Não cadastrado')
    })
  }



  changeAluno(e) {
    //alert(e.target.name +"="+ e.target.value)
    const aluno = { ...this.state.aluno }
    aluno[e.target.cpf] = e.target.value
    aluno[e.target.name] = e.target.value
    this.setState({ aluno })
    console.log(this.state)
  }

  // changeResponsavel(e) {
  //   //responsavel[i.target.cpf] = i.target.value
  //   const responsavel = { ... this.state.responsavel }
  //   responsavel[e.target.email] = e.target.value
  //   responsavel[e.target.nome] = e.target.value
  //   this.setState({ responsavel })
  //   console.log(this.state)
  // }

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Aluno</h1>
          <div className="container" style={{ marginBottom: 30, marginTop: 30 }}>
            <div className="alinhandoEsquerda">
              <ListaAlunos></ListaAlunos>
            </div>
            <div className="row">
              <div className="col">
                <form className="alinhandoEsquerda">
                  <div className="card">
                    <div className="card-body">
                      <h3>Cadastro de Aluno</h3>
                      <CadastroAluno change={this.changeAluno}></CadastroAluno>
                    </div>
                  </div>
                  <div className="card" style={{ marginBottom: 30 }}>
                    <div className="card-body">
                      <h3>Cadastro de Responsável</h3>
                      <MDBInput label="Nome" type="text" name="nome" background icon="user" onChange={(e => this.setState({ nome: e.target.value }))} />
                      <MDBInput label="Email" type="text" name="email" background icon="envelope" onChange={(e => this.setState({ email: e.target.value }))} />
                      <MDBInput label="CPF" type="text" name="cpf" background icon="user" onChange={(e => this.setState({ cpf: e.target.value }))} />
                      {/* <CadastroResposavel change={this.changeResponsavel}></CadastroResposavel> */}
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
                        <select className="custom-select custom-select-lg mb-5" id="Turma" defaultValue="1" onChange={(e => this.setState({ turmaIdSlc: e.target.value }) + console.log(this.state.turmaIdSlc))}>
                          <option disabled value="1">Turma</option>
                          {this.state.listaTurmas.map(tur =>
                            <option key={tur.id} value={tur.id}>{tur.nome_curso}</option>
                          )}
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
//this.responsavelPost() +