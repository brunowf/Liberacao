import React from "react";
import { MDBInput } from "mdbreact";
//não funcionando


export default props => {

  return (
    <div>
      {/* <MDBInput label="CPF responsável" type="text" nome= "cpf" background icon="user" onChange={(i => props.change(i))}/> */}
      <MDBInput label="Nome" type="text" name="nome" background icon="user" onChange={(e => props.change(e))} />
      <MDBInput label="Email" type="text" name="email" background icon="envelope" onChange={(e => props.change(e))} />
    </div>


  );
}


