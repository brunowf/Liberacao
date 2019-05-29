import React, { Component } from 'react';
// This example's for browser use, so I'm using `BrowserRouter`.
// The are other routers for other environments, though.
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';


// Your components.
import Login from './telas/Login';
import MenuPrincipal from './telas/MenuPrincipal';
import CadastroUsuario from './telas/CadastroUsuario';
import CadastroEntrada from './telas/CadastroEntrada';
import CadastroSaida from './telas/CadastroSaida';
import CadastroTurma from './telas/CadastroTurma';
import MainProfessor from './telas//Professor/MainProfessor';
import CadastroAluno from './telas/CadastroAluno';
import AlunosLiberadosEntrada from './telas/AlunosLiberadosEntrada';
import AlunosLiberadosSaida from './telas/AlunosLiberadosSaida';

class Routes extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}></Sidebar>
          <div id="page-wrap">

            {/* `component` will render when `path` matches the user's location */}
            {/* `exact` makes it so it only renders if `path` matches exactly. */}
            {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
            <Route exact path="/" component={Login} />
            <Route path="/cadastro_usuario" component={CadastroUsuario} />
            <Route path="/cadastro_entrada" component={CadastroEntrada}/>
            <Route path="/cadastro_saida" component={CadastroSaida}/>
            <Route path="/cadastro_turma" component={CadastroTurma}/>
            <Route path="/professor" component={MainProfessor} />
            <Route path="/cadastro_aluno" component={CadastroAluno} />
            <Route path="/menu_principal" component={MenuPrincipal} />
            <Route path="/alunos_liberados_entrada" component={AlunosLiberadosEntrada}/>
            <Route path="/alunos_liberados_saida" component={AlunosLiberadosSaida}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;