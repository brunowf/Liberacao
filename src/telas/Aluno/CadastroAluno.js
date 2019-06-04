import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

export default props => {

  return (
      <div>
        <MDBInput label="CPF" type="text" name="cpf" background icon="user" onChange={(e => props.change(e))} />
        <MDBInput label="Nome" type="text" background icon="user" onChange={(event => this.setState({ alunoNome: event.target.value }))} />
        <MDBInput label="Data" type="date" background icon="calendar-day" />
      </div>

    );
}