import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
//Feito por todos
export default class MenuPrincipal extends React.Component {

  render() {
    return (
      <div id="App">
        <div id="page-wrap">
          <h1>Menu Principal</h1>
          <div className="container" style={{ marginBottom: 30, marginTop: 30 }}>
            <div className="card">
              <div className="card-body">
                <div>
                  <a className="btn btn-success" href="http://localhost:3000/alunos_liberados_saida" role="button" style={{ width: 250, height: 100 }}>Saída Antecipado</a>
                  <a className="btn btn-success" href="http://localhost:3000/alunos_liberados_entrada" role="button" style={{ width: 250, height: 100 }}>Entrada Tardia</a>
                  <a className="btn btn-success" href="http://localhost:3000/aluno" role="button" style={{ width: 250, height: 100 }}>Cadastro de Aluno</a>
                </div>
                <div>
                  <a className="btn btn-success" href="http://localhost:3000/turma" role="button" style={{ width: 250, height: 100 }}>Cadastro de turma</a>
                  <a className="btn btn-success" href="http://localhost:3000/professor" role="button" style={{ width: 250, height: 100 }}>Cadastro de Professor</a>
                  <a className="btn btn-success" href="http://localhost:3000/usuario" role="button" style={{ width: 250, height: 100 }}>Cadastro de Usuário</a>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>
    );
  }
}