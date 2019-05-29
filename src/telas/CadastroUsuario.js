import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer,
  MDBRow, MDBCol, MDBFreeBird, MDBEdgeHeader, MDBDataTable
} from "mdbreact";
//Rodrigo

export default class CadastroUsuario extends Component {
  constructor() {
    super()
    this.state = { usuarios: {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Nome',
          field: 'nome',
          sort: 'asc',
          width: 150
        },
        {
          label: 'E-mail',
          field: 'email',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Senha',
          field: 'senha',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Data de Cadastro',
          field: 'create_time',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Ativo',
          field: 'ativo',
          sort: 'asc',
          width: 200
        },
      ],
      rows: [{ 
        id: 1,
      nome: 'Admin João da Silva',
      email: 'joao@gmail.com',
      senha: '12345',
      create_time: '2019-05-28T00:55:53.622+0000', ativo: true, },//"telefones": ["(48)999887766"], "registros_saidas": [{ "id": 1, "observacao": "Obs", "hora_saida": "1970-01-01T22:26:00.000+0000", "repetir_ate": "2019-04-25T03:00:00.000+0000", "segunda": false, "terca": true, "quarta": false, "quinta": false, "sexta": false, "sabado": false, "notificar_resp": true, "notificar_prof": true, "create_time": "2019-05-28T00:55:53.623+0000" }], "registros_entradas": [{ "id": 1, "observacao": "obs", "hora_entrada": "1970-01-01T23:44:00.000+0000", "repetir_ate": "2019-04-25T03:00:00.000+0000", "segunda": false, "terca": true, "quarta": false, "quinta": false, "sexta": false, "sabado": false, "notificar_resp": true, "notificar_prof": true, "create_time": "2019-05-28T00:55:53.623+0000" }] }, 
       { id: 2, nome: "Admin Manoel Heleno", email: "manuel@gmail.com", senha: "12345", create_time: "2019-05-28T00:55:53.622+0000"}//, "ativo": true, "telefones": [], "registros_saidas": [], "registros_entradas": [] }, 
      // { "id": 3, "nome": "Admin Helena Filha", "email": "helena@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.622+0000", "ativo": false, "telefones": [], "registros_saidas": [], "registros_entradas": [] }, 
      // { "id": 4, "nome": "Guarda João da Silva", "email": "joao@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.622+0000", "ativo": true, "telefones": [] }, 
      // { "id": 5, "nome": "Guarda Manoel Heleno", "email": "manuel@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.622+0000", "ativo": true, "telefones": [] }, 
      // { "id": 6, "nome": "Guarda Helena Filha", "email": "helena@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.622+0000", "ativo": false, "telefones": [] }, 
      // { "id": 7, "nome": "Professor João da Silva", "email": "joao@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.623+0000", "ativo": true, "telefones": [], "registros_saidas": [{ "id": 1, "observacao": "Obs", "hora_saida": "1970-01-01T22:26:00.000+0000", "repetir_ate": "2019-04-25T03:00:00.000+0000", "segunda": false, "terca": true, "quarta": false, "quinta": false, "sexta": false, "sabado": false, "notificar_resp": true, "notificar_prof": true, "create_time": "2019-05-28T00:55:53.623+0000" }], "registros_entradas": [{ "id": 1, "observacao": "obs", "hora_entrada": "1970-01-01T23:44:00.000+0000", "repetir_ate": "2019-04-25T03:00:00.000+0000", "segunda": false, "terca": true, "quarta": false, "quinta": false, "sexta": false, "sabado": false, "notificar_resp": true, "notificar_prof": true, "create_time": "2019-05-28T00:55:53.623+0000" }] }, 
      // { "id": 8, "nome": "Professor Manoel Heleno", "email": "manuel@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.623+0000", "ativo": true, "telefones": [], "registros_saidas": [], "registros_entradas": [] }, 
      // { "id": 9, "nome": "Professor Helena Filha", "email": "helena@gmail.com", "senha": "12345", "create_time": "2019-05-28T00:55:53.623+0000", "ativo": false, "telefones": [], "registros_saidas": [], "registros_entradas": [] }
    ]

  }}
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <MDBContainer>
        <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
          {/* <MDBEdgeHeader color="white"></MDBEdgeHeader>
        <MDBFreeBird> */}
          <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8" md="8" lg="7" className="mx-auto float-none white z-depth-3 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Lista de Usuários</MDBCardTitle>

                <MDBDataTable striped bordered small data={this.state.usuarios} />

              </MDBCardBody>
            </MDBCol>
            <MDBCol size="2"></MDBCol>
          </MDBRow>

          {/* </MDBFreeBird> */}
        </MDBContainer>

        <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
          {/* <MDBEdgeHeader color="white"></MDBEdgeHeader>
        <MDBFreeBird> */}
          <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8" md="8" lg="7" className="mx-auto float-none white z-depth-3 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Cadastro de Usuário</MDBCardTitle>
                <form className='alinhandoEsquerda'>
                  <MDBInput label="Nome Completo" background icon="user" group type="text" id='nome' />
                  <MDBInput label="E-mail" background icon="envelope" color="success" group type='email' id='email' />
                  <MDBInput label="Senha" background icon="key" group type='password' id='senha' />
                  <MDBInput label="Telefone / WhatsApp" background icon="phone" group type='tel' id='telefone' />

                  <div>
                    <select className="custom-select custom-select-lg mb-5" id="categoria" defaultValue="1">
                      <option disabled value="1">Tipo de Usuário</option>
                      <option value="2">Administrador</option>
                      <option value="3">Guarda</option>
                    </select>
                  </div>

                </form>
                <MDBBtn color="success" className="text-xs-left">Salvar</MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol size="2"></MDBCol>
          </MDBRow>

          {/* </MDBFreeBird> */}
        </MDBContainer>


      </MDBContainer>
    );
  }
}