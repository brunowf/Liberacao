import React from "react";
import { MDBInput, } from "mdbreact";
//Marcio
export default props => {

  return (
      <div>
        <MDBInput label="CPF" type="text" name="cpf" background icon="user" onChange={(e => props.change(e))} />
        <MDBInput label="Nome" type="text" name="nome" background icon="user" onChange={(e => props.change(e))} />
        <MDBInput label="Data" type="date" background icon="calendar-day" />
      </div>

    );
}