import React, { Component } from 'react';
// This example's for browser use, so I'm using `BrowserRouter`.
// The are other routers for other environments, though.
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

import FixedNavbar from './components/NavBarMDB';

// Your components.
import Login from './telas/Login';
import MenuPrincipal from './telas/MenuPrincipal';

import MainUsuario from './telas/User/MainUser';

import CadastroAluno from './telas/Aluno/CadastroAluno';
import CadastroTurma from './telas/Aluno/CadastroTurma';

import MainProfessor from './telas/Professor/MainProfessor';


import AlunosLiberadosEntrada from './telas/Liberacao/AlunosLiberadosEntrada';
import AlunosLiberadosSaida from './telas/Liberacao/AlunosLiberadosSaida';
import CadastroEntrada from './telas/Liberacao/CadastroEntrada';
import CadastroSaida from './telas/Liberacao/CadastroSaida';

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
            <Route path="/cadastro_entrada" component={CadastroEntrada} />
            <Route path="/cadastro_saida" component={CadastroSaida} />
            <Route path="/cadastro_turma" component={CadastroTurma} />
            <Route path="/professor" component={MainProfessor} />
            <Route path="/cadastro_aluno" component={CadastroAluno} />
            <Route path="/menu_principal" component={MenuPrincipal} />
            <Route path="/alunos_liberados_entrada" component={AlunosLiberadosEntrada} />
            <Route path="/alunos_liberados_saida" component={AlunosLiberadosSaida} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;