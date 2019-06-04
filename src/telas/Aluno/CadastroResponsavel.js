import React,{ Component } from "react";
import { MDBInput, MDBBtn} from "mdbreact";
import Axios from 'axios';
import { urlServidor } from '../../Variaveis.json'


export default class CadastroResponsavel extends Component{


  responsavelPost(){
    Axios.post(urlServidor + '/responsavel',{
      id: null,
      nome: this.state.responsavelNome,
      email: this.state.responsavelEmail,
      cpf: null,
      }).then(resposta => {
        alert('Cadastrado com sucesso')
      }).catch(resposta => {
        alert('Não cadastrado')
      })
  }

  render(){
    return(
      <div>
        <MDBInput label="CPF responsável" type="text" background icon="user" onChange={(event => this.setState({ responsavelCpf: event.target.value }))}/>
        <MDBInput label="Nome responsável" type="text" background icon="user" onChange={(event => this.setState({ responsavelNome: event.target.value }))}/>
        <MDBInput label="Email responsável" type="text" background icon="envelope" onChange={(event => this.setState({ responsavelEmail: event.target.value }))}/>

        <MDBBtn onClick={() => this.responsavelPost()}></MDBBtn>
      </div>

      
    );
  }
}

                     