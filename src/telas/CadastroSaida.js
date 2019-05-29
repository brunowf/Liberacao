import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer,
  MDBRow, MDBCol, MDBFreeBird, MDBEdgeHeader
} from "mdbreact";
//Rodrigo
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


export default class CadastroSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }


  render() {
    return (



      <MDBContainer style={{ marginTop: 50, marginBottom: 50 }}>
        {/* <MDBEdgeHeader color="white"></MDBEdgeHeader>
        <MDBFreeBird> */}
        <MDBRow>
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2">
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <form className='alinhandoEsquerda'>
                <MDBInput hint="CPF" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />

                <MDBInput label="Nome Completo" icon="user" group type="text" id='nome' />
                <MDBInput label="E-mail" icon="envelope" color="success" group type='email' id='email' />
                <MDBInput label="Senha" icon="key" group type='password' id='senha' />
                <MDBInput label="Telefone / WhatsApp" icon="phone" group type='tel' id='telefone' />

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
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2">
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <form className='alinhandoEsquerda'>

                <RangePicker className='alinhandoCentro'
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  onChange={onChange}
                  onOk={onOk}
                />

                <MDBInput label="E-mail" icon="envelope" color="success" group type='email' id='email' />
                <MDBInput label="Senha" icon="key" group type='password' id='senha' />
                <MDBInput label="Telefone / WhatsApp" icon="phone" group type='tel' id='telefone' />

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

      </MDBContainer >
    );
  }
}