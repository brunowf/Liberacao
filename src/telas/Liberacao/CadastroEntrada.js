
import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/antd/dist/antd.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBFormInline } from "../../../node_modules/mdbreact";
import '../../css/styles.css';


import { DatePicker } from '../../../node_modules/antd';
import MenuItem from '../../../node_modules/@material-ui/core/MenuItem';
import Select from '../../../node_modules/@material-ui/core/Select';
/*import { SVGIcon } from '../../../node_modules/react-md';// Switch, Grid, Cell, SelectionControl, SelectionControlGroup, 

import favorite from '../../icons/favorite.svg';
import favoriteBorder from '../../icons/favorite_border.svg';*/

import { urlServidor } from '../../Variaveis.json';
import api from '../../services/api';

// Range Picker

const { RangePicker } = DatePicker;


function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

/********************      
 *  * 
 * Simple Select material-ui
 *  * 
 * 
 */




/*
const checkboxControls = [{
  label: 'Checkbox 1',
  value: '1',
  checkedCheckboxIcon: <SVGIcon use={favorite.url} />,
  uncheckedCheckboxIcon: <SVGIcon use={favoriteBorder.url} />,
}, {
  label: 'Checkbox 2',
  value: '2',
}, {
  label: 'Checkbox 3',
  value: '3',
  disabled: true,
  uncheckedCheckboxIcon: null,
}];

const radioControls = [{
  label: 'Radio 1',
  value: '1',
  checkedRadioIcon: <SVGIcon use={favorite.url} />,
  uncheckedRadioIcon: <SVGIcon use={favoriteBorder.url} />,
}, {
  label: 'Radio 2',
  value: '2',
}, {
  label: 'Radio 3',
  value: '3',
  disabled: true,
  uncheckedRadioIcon: null,
}];

*/


export default class CadastroEntrada extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props)
    this.handleChangeTurma = this.handleChangeTurma.bind(this)
    this.state = {
      id: 1,
      hora_entrada: '1970-01-01 20:44:00',
      notificar_prof: true,
      notificar_resp: true,
      observacao: 'asedfd dfad sfa ds',
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
      administrador_id: '2',
      aluno_id: '1',
      turma: '0',
      nome_aluno: '',
      nome_resp: '',
      tel_aluno: '',
      tel_resp: ''
    }
  }

  handleChangeTurma(event) {
    this.setState({ turma: event.target.value })
  }


  entradaPost() {
    api.post(urlServidor + '/registroentradas', {
      id: this.state.id,
      hora_entrada: this.state.hora_entrada,
      notificar_prof: this.state.notificar_prof,
      notificar_resp: this.state.notificar_resp,
      observacao: this.state.observacao,
      segunda: this.state.segunda,
      terca: this.state.terca,
      quarta: this.state.quarta,
      quinta: this.state.quinta,
      sexta: this.state.sexta,
      sabado: this.state.sabado
      /*administrador_id: this.state.adminnistrador_id,
      aluno_id: this.state.aluno_id*/

    }).then(resposta => {
      //se deu certo:
      alert('Cadastrado com sucesso!')
    })
      .catch(resposta => {
        //se der errado
        console.log(resposta)
        alert('Deu errado!')
      })
  }


  buscaAluno() {
    api.get(urlServidor + '/alunos/'+ this.state.id)
      .then(resposta => {
        console.log(resposta)
        this.setState({ name: resposta.data.nome, aluno_id: resposta.data.id });
        

      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
        this.props.history.push("/");
      })
  }


  render() {
    return (



      <MDBContainer style={{ marginTop: 50, marginBottom: 50 }} >
        {/* <MDBEdgeHeader color="white"></MDBEdgeHeader>
        <MDBFreeBird> */}
        <MDBRow >
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2 card">
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <form className='alinhandoEsquerda'>
                <MDBInput hint="CPF" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
                <MDBBtn color="success" className="text-xs-left embaixo" onClick={() => this.buscaAluno()}>Buscar</MDBBtn>

                <MDBInput label="Nome Completo" icon="user" group type="text" id='nome' value={this.state.name} />
                <MDBInput label="Responsável" icon="envelope" color="success" group type='email' id='email' />
                <MDBInput label="Whatsapp" icon="key" group type='password' id='senha' />


                <MDBInput label="Telefone / WhatsApp" icon="phone" group type='tel' id='telefone' />




                {/* 
              
              
              
                  to do: 
                      Tentar acertar o CSS
              
               */}




              </form>
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2 card">
            <MDBCardBody >
              <MDBCardTitle></MDBCardTitle>

              <form className='alinhandoEsquerda'>



                <MDBInput label="Nome Professor" icon="user" group type="text" id='professor' />
              </form>
              {/*<InputLabel htmlFor="turma-simple">Turma</InputLabel>*/}
              <Select
                value={this.state.turma}
                onChange={this.handleChangeTurma}
              >
                {/*inputProps={{name: 'turma',id: 'turma-simple',}}*/}

                <MenuItem value={0}>
                  <em>Escolha Turma</em>
                </MenuItem>
                <MenuItem value={10}> Connect 2A </MenuItem>
                <MenuItem value={20}> Connect 2B </MenuItem>

              </Select>
              <hr />


              <RangePicker className='alinhandoCentro'
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                onChange={onChange}
                onOk={onOk}
              />

              <MDBFormInline>
                <MDBInput label="SEG" type="checkbox" id="segunda" name="segunda" value="true" />
                <MDBInput label="TER" type="checkbox" id="terca" name="terca" value="true" />
                <MDBInput label="QUA" type="checkbox" id="quarta" name="quarta" value="true" />
                <MDBInput label="QUI" type="checkbox" id="quinta" name="quinta" value="true" />
                <MDBInput label="SEX" type="checkbox" id="sexta" name="sexta" value="true" />
                <MDBInput label="SAB" type="checkbox" id="sabado" name="sabado" value="true" />
              </MDBFormInline>

              <MDBBtn color="success" className="text-xs-left embaixo" onClick={() => this.entradaPost()}>Salvar</MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="2"></MDBCol>

        </MDBRow>

      </MDBContainer >
    );
  }
}