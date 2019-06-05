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
        <MDBInput label="CPF responsável" type="text" nome= "cpf" background icon="user" onChange={(i => props.changer(i))}/>
        <MDBInput label="Nome responsável" type="text" nome= "nome" background icon="user" onChange={(i => props.changer(i))}/>
        <MDBInput label="Email responsável" type="text" nome= "email" background icon="envelope" onChange={(i => props.changer(i))}/>
      </div>

      
    );
  }
}

                     