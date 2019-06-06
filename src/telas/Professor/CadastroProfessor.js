import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBCardTitle } from "mdbreact";
import { urlServidor } from '../../Variaveis.json';
import api from '../../services/api';
// import { DatePicker } from 'antd/lib/date-picker';
//import Modalzin from './modal/Modalzin';

//Bruno
//mdbootstrap.com/docs/react/forms/basic/
export default class CadastroProfessor extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      professorId: '',
      professorNome: '',
      professorEmail: 'MATUTINO',
      professorSenha: '',
      professorTelefone: '',
    }
  }

  professorPost() {
    api.post(urlServidor + '/users/professores', {
      id: null,
      nome: this.state.professorNome,
      email: this.state.professorEmail,
      senha: this.state.professorSenha,
      telefone: this.state.professorTelefone,
    }).then(resposta => {
      //se deu certo:
      alert('Cadastrado com sucesso!')
    })
      .catch(resposta => {
        //se der errado
        alert('Deu errado!')
      })
  }


  render() {
    return (
      <div>
        <form>
          <MDBCardTitle>Cadastro de Professor</MDBCardTitle>
          <MDBInput label="Nome" background icon="user" onChange={(event => this.setState({ professorNome: event.target.value }))} />
          <MDBInput label="Email" type="email" background icon="envelope" onChange={(event => this.setState({ professorEmail: event.target.value }))} />
          <MDBInput label="Senha" type="password" background icon="key" onChange={(event => this.setState({ professorSenha: event.target.value }))} />
          <MDBInput label="Telefone" type="tel" background icon="phone" onChange={(event => this.setState({ professorTelefone: event.target.value }))} />
          <div className='tyleBotao'>
            <MDBBtn className="dusty-grass-gradient" onClick={() => this.professorPost()}>Salvar</MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}
