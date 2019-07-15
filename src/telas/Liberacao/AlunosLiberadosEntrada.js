import React, { Component } from '../../../node_modules/react';
import { MDBBtn, MDBContainer } from "mdbreact";
import api from '../../services/api';
import { urlServidor } from '../../Variaveis.json';
//V1.0 Daniel, V1.1 Marcelo, V1.2 Rodrigo
//V2.0 Bruno

export default class AlunosLiberadosEntrada extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount() {
    api.get(urlServidor + '/registroentradas')
      .then(resposta => {
        this.setState({ listaEntrada: resposta.data})
        console.log(resposta)
      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
        this.props.history.push("/");
      })
  }
  entradaDelete(idzin) {
    api.delete(urlServidor + '/registroentradas/' + idzin)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('Registro deletado!')
        window.location.reload();
      }).catch(resposta => {
        //se der errado
        console.log(resposta);
        alert('Deu errado!');
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      listaEntrada: [],
    }
  }

  render() {
    return (
      <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda'>

          

            <div>
              <div className='card-columns' style={{ marginTop: 20, marginBottom: 5 }}>
                
                {this.state.listaEntrada.map(lista =>
                  <div className='text-capitalize' key={lista.id}>
                    <div className="card" style={{ marginTop: 10, marginBottom: 5 }}>
                      <div className="card-body text-center">
                        <p className="card-text font-weight-bold" style={{ fontSize: 20 }}>{lista.aluno.nome}</p>
                        <MDBBtn outline color="danger" onClick={() => this.entradaDelete(lista.id)}>Deletar</MDBBtn>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>



          </div>
          <div className='col-sm-1'></div>
        </div>
      </MDBContainer >
    );
  }
}