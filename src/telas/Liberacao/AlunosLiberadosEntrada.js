import React, { Component } from '../../../node_modules/react';
import { MDBCardBody, MDBBtn, MDBContainer } from "mdbreact";
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
        this.setState({ listaEntrada: resposta.data })
        console.log(this.state.listaEntrada)
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
      listaEntrada: []
    }
  }

  render() {
    return (
      <MDBContainer style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <div className="text-center">
              <div className="text-capitalize card-group" style={{ marginTop: 20, marginBottom: 5 }}>
                  {this.state.listaEntrada.map(lista =>
                  <div className="card" style={{ marginTop: 10, marginBottom: 5 }}>
                    <div className="card-body text-center">
                      <p className="card-text font-weight-bold" style={{fontSize:20}}>{lista.aluno.nome}</p>
                      <MDBBtn outline color="danger" onClick={() => this.entradaDelete(lista.id)}>Deletar</MDBBtn>
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


// <div id="App">
      //   <div id="page-wrap">
      //     <h2>Alunos Liberados Entrada</h2>

      //     <div className="card-group">

            // <div className="card">
            //   <div className="card-body text-center">
            //     <img alt='Imagem do aluno' src="imagens/loiramaria.jpg" width="260" height="160"></img>
            //     <p className="card-text">Proximo Nayala</p>
            //   </div>
            // </div>

      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/morena.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Morena</p>
      //         </div>
      //       </div>

      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/neila.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Neila</p>
      //         </div>
      //       </div>

      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/fabrine.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Fabrine</p>
      //         </div>
      //       </div>
      //     </div>



      //     <div className="card-group">
      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/ronaldo.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Ronaldo </p>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/giovana.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Giovana</p>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/rose.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Rosangela</p>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <div className="card-body text-center">
      //           <img alt='Imagem do aluno' src="imagens/lucas.jpg" width="260" height="160"></img>
      //           <p className="card-text">Proximo Maicon</p>
      //         </div>
      //       </div>
      //     </div>


      //   </div>
      // </div>