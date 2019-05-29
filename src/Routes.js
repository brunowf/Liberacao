import React, { Component } from 'react';
// This example's for browser use, so I'm using `BrowserRouter`.
// The are other routers for other environments, though.
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';


// Your components.
import Login from './telas/Login';
import MenuPrincipal from './telas/MenuPrincipal';
import MainUsuario from './telas/User/MainUser';
import CadastroEntrada from './telas/CadastroEntrada';
import CadastroSaida from './telas/CadastroSaida';
import MainTurma from './telas/Turma/MainTurma';
import MainProfessor from './telas//Professor/MainProfessor';
import MainAluno from './telas/Aluno/MainAluno';
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
            <Route path="/usuario" component={MainUsuario} />
            <Route path="/cadastro_entrada" component={CadastroEntrada}/>
            <Route path="/cadastro_saida" component={CadastroSaida}/>
            <Route path="/turma" component={MainTurma}/>
            <Route path="/professor" component={MainProfessor} />
            <Route path="/aluno" component={MainAluno} />
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