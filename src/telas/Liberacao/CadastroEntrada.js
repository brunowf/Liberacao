import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/antd/dist/antd.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { MDBInput, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBRow, MDBCol} from "../../../node_modules/mdbreact";
import '../../css/styles.css';
import { DatePicker } from '../../../node_modules/antd';
import { urlServidor } from '../../Variaveis.json';
import api from '../../services/api';

// Marcelo
const { RangePicker } = DatePicker;
const dataAtual = new Date();

export default class CadastroEntrada extends Component {
  onOk(value) {
    console.log('onOk: ', value);
  }

  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount() {
    api.get(urlServidor + '/alunos/')
      .then(resposta => {
        this.setState({ listaAlunos: resposta.data })
        console.log(this.state.listaAlunos)
        console.log(this.state.listaAlunos.length)
      })
      .catch(resposta => {
        alert('Deu errado!')
        console.log(resposta)
        this.props.history.push("/");
      })
    api.get(urlServidor + '/users/professores')
      .then(resposta => {
        this.setState({ listaProf: resposta.data })
        console.log(this.state.listaProf)
      })
      .catch(resposta => {
        alert('Deu errado!')
        console.log(resposta)
        this.props.history.push("/");
      })
  }

  entradaPost() {
    if (!this.state.observacao || !this.state.alunoSlc || !this.state.professorSlc) {
      alert("Preencha e selecione todos os campos!")
    } else {
      api.post(urlServidor + '/registroentradas', {
        hora_entrada: this.state.horaEntrada,
        notificar_prof: this.state.notificar_prof,
        notificar_resp: this.state.notificar_resp,
        observacao: this.state.observacao,
        segunda: this.state.segunda,
        terca: this.state.terca,
        quarta: this.state.quarta,
        quinta: this.state.quinta,
        sexta: this.state.sexta,
        sabado: this.state.sabado,
        aluno: {
          "id": this.state.alunoSlc
        },
        administrador: {
          "id": 2
        },
        professores: [
          {
            "id": this.state.professorSlc
          }
        ]

        /*administrador_id: this.state.adminnistrador_id,
        aluno_id: this.state.aluno_id*/

      }).then(resposta => {
        //se deu certo:
        alert('Cadastrado com sucesso!')
        window.location.reload();
      })
        .catch(resposta => {
          //se der errado
          console.log(resposta)
          alert('Deu errado!')
        })
    }
  }

  constructor(props) {
    super(props)
    // this.handleChangeTurma = this.handleChangeTurma.bind(this)
    this.state = {
      listaAlunos: [],
      listaProf: [],
      dataEntrada: null,
      horaEntrada: dataAtual.getHours() + ':' + dataAtual.getMinutes(),
      notificar_prof: true,
      notificar_resp: true,
      observacao: null,
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
      administrador_id: '2',
      alunoSlc: null,
      professorSlc: null,
    }
  }

  render() {
    return (
      <MDBContainer style={{ marginTop: 50, marginBottom: 50 }} >
        <MDBRow >
          <MDBCol size="3"></MDBCol>
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2 card">
<<<<<<< HEAD
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <form className='alinhandoEsquerda'>
                {/* <MDBInput hint="CPF" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" /> */}
                <select defaultValue='n/selecionado' onChange={(event => this.setState({ alunoSlc: event.target.value }) + console.log(event.target.value))}>
                  <option value='n/selecionado' disabled>Alunos</option>
                  {this.state.listaAlunos.map(lista =>
                    <option key={lista.id} value={lista.id}>{lista.nome}</option>
                  )}
                </select>
                <select defaultValue='n/selecionado' onChange={(event => this.setState({ professorSlc: event.target.value }) + console.log(event.target.value))}>
                  <option value='n/selecionado' disabled>Professores</option>
                  {this.state.listaProf.map(lista =>
                    <option key={lista.id} value={lista.id}>{lista.nome}</option>
                  )}
                </select>
                <br />
                {/*<label htmlFor='notProf'>notificar_prof :</label>*/}
                <MDBInput label="notProf" type='checkbox' id='notProf' onChange={(event => this.setState({ notificar_prof: event.target.checked }))}></MDBInput>
                
                {/* <label htmlFor='notResp'>notificar_resp :</label> */}
                <MDBInput label="notResp" type='checkbox' id='notResp' onChange={(event => this.setState({ notificar_resp: event.target.checked }))}></MDBInput>
                
                <textarea onChange={(event => this.setState({ observacao: event.target.value }) + console.log(event.target.value))}></textarea>
                
                <MDBInput type='date' onChange={(event => this.setState({ horaEntrada: event.target.value }) + console.log(event.target.value))}></MDBInput>
                
                {/* <button onClick={(event => event.preventDefault() + console.log(this.state.horaEntrada))}>teste</button> */}
                
                <MDBInput type='time' defaultValue={dataAtual.getHours() + ':' + (dataAtual.getMinutes() < 9 ? '0' + dataAtual.getMinutes() : dataAtual.getMinutes())} onChange={(event => this.setState({horaEntrada: event.target.value}))}></MDBInput>
                
                
                <MDBInput label="SEG" type="checkbox" onChange={(event => this.setState({ segunda: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="TER" type="checkbox" onChange={(event => this.setState({ terca: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="QUA" type="checkbox" onChange={(event => this.setState({ quarta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="QUI" type="checkbox" onChange={(event => this.setState({ quinta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="SEX" type="checkbox" onChange={(event => this.setState({ sexta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="SAB" type="checkbox" onChange={(event => this.setState({ sabado: event.target.checked }) + console.log(event.target.checked))} />
                {/**to do: administrador no post */}

                {/* <MDBInput label="Nome Completo" icon="user" group type="text" id='nome' value={this.state.name} />
                <MDBInput label="Responsável" icon="envelope" color="success" group type='email' id='email' />
                <MDBInput label="Whatsapp" icon="key" group type='password' id='senha' />


                <MDBInput label="Telefone / WhatsApp" icon="phone" group type='tel' id='telefone' /> */}




                {/* 
              
              
              
                  to do: 
                      Tentar acertar o CSS
              
               */}




              </form>
=======
            <MDBCardBody >
              <br />
              <MDBCardTitle >Pessoas</MDBCardTitle>
              <br /><hr />
              <br />
              <select className="browser-default custom-select" defaultValue='n/selecionado' onChange={(event => this.setState({ alunoSlc: event.target.value }) + console.log(event.target.value))}>
                <option value='n/selecionado' disabled>Alunos</option>
                {this.state.listaAlunos.map(lista =>
                  <option key={lista.id} value={lista.id}>{lista.nome}</option>
                )}
              </select >
              <br /><br /><br />
              <select className="browser-default  custom-select" defaultValue='n/selecionado' onChange={(event => this.setState({ professorSlc: event.target.value }) + console.log(event.target.value))}>
                <option value='n/selecionado' disabled>Professores</option>
                {this.state.listaProf.map(lista =>
                  <option key={lista.id} value={lista.id}>{lista.nome}</option>
                )}
              </select>
              <MDBInput type="textarea" label="Observações" onChange={(event => this.setState({ observacao: event.target.value }) + console.log(event.target.value))}></MDBInput>
              <MDBFormInline>
                <MDBInput label="notificar professor" type='checkbox' id='notProf' onChange={(event => this.setState({ notificar_prof: event.target.checked }))} ></MDBInput>
                <MDBInput label="notificar responsável" type='checkbox' id='notResp' onChange={(event => this.setState({ notificar_resp: event.target.checked }))}></MDBInput>
              </MDBFormInline>
>>>>>>> a8d83de99107495d2d6bbdff5c2807cabfcb46c0
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="2"></MDBCol>
        </MDBRow><br />
        <MDBRow >
          <MDBCol size="3"></MDBCol>
          <MDBCol size="5" md="10" lg="5" className="white z-depth-3 py-2 px-2 card">
            <MDBCardBody><br />
              <MDBCardTitle >Dia/Hora</MDBCardTitle>
              <br /><hr />
              {/*              <RangePicker className='alinhandoCentro'
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
<<<<<<< HEAD
                onOk={onOk}
              />

              {/*<MDBFormInline>
                <MDBInput label="SEG" type="checkbox" id="segunda" name="segunda" value="true" />
                <MDBInput label="TER" type="checkbox" id="terca" name="terca" value="true" />
                <MDBInput label="QUA" type="checkbox" id="quarta" name="quarta" value="true" />
                <MDBInput label="QUI" type="checkbox" id="quinta" name="quinta" value="true" />
                <MDBInput label="SEX" type="checkbox" id="sexta" name="sexta" value="true" />
                <MDBInput label="SAB" type="checkbox" id="sabado" name="sabado" value="true" />
              </MDBFormInline>*/}

=======
                onOk={this.state.onOk}
                  />  */}
              <MDBInput type='date' onChange={(event => this.setState({ horaEntrada: event.target.value }) + console.log(event.target.value))}></MDBInput>
              <MDBInput type='time' defaultValue={dataAtual.getHours() + ':' + (dataAtual.getMinutes() < 9 ? '0' + dataAtual.getMinutes() : dataAtual.getMinutes())} onChange={(event => this.setState({ horaEntrada: event.target.value }))}></MDBInput>
              <MDBFormInline>
                <MDBInput label="SEG" type="checkbox" onChange={(event => this.setState({ segunda: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="TER" type="checkbox" onChange={(event => this.setState({ terca: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="QUA" type="checkbox" onChange={(event => this.setState({ quarta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="QUI" type="checkbox" onChange={(event => this.setState({ quinta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="SEX" type="checkbox" onChange={(event => this.setState({ sexta: event.target.checked }) + console.log(event.target.checked))} />
                <MDBInput label="SAB" type="checkbox" onChange={(event => this.setState({ sabado: event.target.checked }) + console.log(event.target.checked))} />
              </MDBFormInline>
              <br /><br /><br />
>>>>>>> a8d83de99107495d2d6bbdff5c2807cabfcb46c0
              <MDBBtn color="success" className="text-xs-left embaixo" onClick={() => this.entradaPost()}>Salvar</MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol size="2"></MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}