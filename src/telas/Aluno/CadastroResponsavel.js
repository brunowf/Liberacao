import React,{ Component } from "react";
import { MDBInput} from "mdbreact";

export default class CadastroResponsavel extends Component{
  render(){
    return(
      <div>
        <MDBInput label="CPF responsável" type="text" background icon="user" />
        <MDBInput label="Nome responsável" type="text" background icon="user" />
        <MDBInput label="Email responsável" type="text" background icon="envelope" />
      </div>
    );
  }
}