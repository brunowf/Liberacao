import React from "react";
import { MDBInput} from "mdbreact";



export default props => {

    return(
      <div>
        <MDBInput label="CPF responsável" type="text" nome= "cpf" background icon="user" onChange={(i => props.change(i))}/>
        <MDBInput label="Nome responsável" type="text" nome= "nome" background icon="user" onChange={(i => props.change(i))}/>
        <MDBInput label="Email responsável" type="text" nome= "email" background icon="envelope" onChange={(i => props.change(i))}/>
      </div>

      
      );
  }


                     