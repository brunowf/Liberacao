import React, { Component } from 'react';
// This example's for browser use, so I'm using `BrowserRouter`.
// The are other routers for other environments, though.
import { BrowserRouter, Route } from 'react-router-dom';

// Your components.
import Login from './telas/Login'
import MenuPrincipal from './telas/MenuPrincipal';
import CadastroUsuario from './telas/CadastroUsuario'
import CadastroEntrada from './telas/CadastroEntrada'
import CadastroSaida from './telas/CadastroSaida'
import CadastroTurma from './telas/CadastroTurma'
import CadastroProfessor from './telas/CadastroProfessor'
import CadastroAluno from './telas/CadastroAluno'
import LiberacaoEntrada from './telas/LiberacaoEntrada'
import LiberacaoSaida from './telas/LiberacaoSaida'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* `component` will render when `path` matches the user's location */}
          {/* `exact` makes it so it only renders if `path` matches exactly. */}
          {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
          <Route exact path="/" component={Login}/>
          <Route path="/cadastro_usuario" component={CadastroUsuario}/>
          <Route path="/cadastro_entrada" component={CadastroEntrada}/>
          <Route path="/cadastro_saida" component={CadastroSaida}/>
          <Route path="/cadastro_turma" component={CadastroTurma}/>
          <Route path="/cadastro_professor" component={CadastroProfessor}/>
          <Route path="/cadastro_aluno" component={CadastroAluno}/>
          <Route path="/menu_principal" component={MenuPrincipal}/>
          <Route path="/alunos_liberados_entrada" component={LiberacaoEntrada}/>
          <Route path="/alunos_liberados_saida" component={LiberacaoSaida}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;