import React, { Component } from "react";
import { MDBInput} from "mdbreact";

export default class CadastroAluno extends Component{
  render(){
    return(
      <div>
        <MDBInput label="CPF" type="text" background icon="user" />
        <MDBInput label="Nome" type="text" background icon="user" />
        <MDBInput label="Data" type="date" background icon="calendar-day" />
      </div>
    );
  }
}





