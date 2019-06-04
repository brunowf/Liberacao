
import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/antd/dist/antd.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import {
  MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer,
  MDBRow, MDBCol, MDBFreeBird, MDBEdgeHeader
} from "../../../node_modules/mdbreact";
import '../../css/styles.css';

import { DatePicker } from '../../../node_modules/antd';
import { makeStyles } from '../../../node_modules/@material-ui/core/styles';
import InputLabel from '../../../node_modules/@material-ui/core/InputLabel';
import MenuItem from '../../../node_modules/@material-ui/core/MenuItem';
import FormControl from '../../../node_modules/@material-ui/core/FormControl';
import Select from '../../../node_modules/@material-ui/core/Select';
import { SVGIcon, SelectionControl, SelectionControlGroup, Checkbox, Switch, Grid, Cell } from '../../../node_modules/react-md'




import check from '../../icons/check.svg';
import favorite from '../../icons/favorite.svg';
import favoriteBorder from '../../icons/favorite_border.svg';

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




export default class CadastroEntrada extends Component {

  constructor(props) {
    super(props)
    this.handleChangeTurma = this.handleChangeTurma.bind(this)
  }

  showSettings(event) {
    event.preventDefault();
  }

  state = {
    turma: 10
  }

  handleChangeTurma(event) {
    this.setState({ turma: event.target.value })
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

                <MDBInput label="Nome Completo" icon="user" group type="text" id='nome' />
                <MDBInput label="Responsável" icon="envelope" color="success" group type='email' id='email' />
                <MDBInput label="Whatsapp" icon="key" group type='password' id='senha' />


                <MDBInput label="Telefone / WhatsApp" icon="phone" group type='tel' id='telefone' />




                {/* 
              
              
              
                  to do: 
                      Tentar acertar o CSS
              
               */}
                <InputLabel htmlFor="turma-simple">Turma</InputLabel>
                <Select
                  value={this.state.turma}
                  onChange={this.handleChangeTurma}
                  inputProps={{
                    name: 'turma',
                    id: 'turma-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>Escolha Turma</em>
                  </MenuItem>
                  <MenuItem value={10}> Connect 2A </MenuItem>
                  <MenuItem value={20}> Connect 2B </MenuItem>

                </Select>



              </form>
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2 card">
            <MDBCardBody >
              <MDBCardTitle></MDBCardTitle>

              <form className='alinhandoEsquerda'>

                <RangePicker className='alinhandoCentro'
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  onChange={onChange}
                  onOk={onOk}
                />


                <MDBInput label="Nome Professor" icon="user" group type="text" id='professor' />


                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="segunda"
                  label="Segunda"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="terca"
                  label="Terça"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="quarta"
                  label="Quarta"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="quinta"
                  label="Quinta"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="sexta"
                  label="Sexta"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-read-material-design-spec"
                  name="sabado"
                  label="Sábado"
                  type="checkbox"
                  value="true"
                  defaultChecked
                />



              </form>


              <MDBBtn color="success" className="text-xs-left embaixo">Salvar</MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="2"></MDBCol>

        </MDBRow>

      </MDBContainer >
    );
  }
}