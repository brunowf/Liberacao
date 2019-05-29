import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Menu {...props}>
      <Link to="/">{'Login'}</Link>
      <Link to="/menu_principal">{'Menu'}</Link>
      <Link to="/cadastro_entrada">{'Cadastro de entrada'}</Link>
      <Link to="/cadastro_saida">{'Cadastro de saida'}</Link>
      <Link to="/cadastro_usuario">{'Cadastro de usuário'}</Link>
      <Link to="/professor">{'Professor'}</Link>
      <Link to="/cadastro_aluno">{'Cadastro de aluno'}</Link>
      <Link to="/cadastro_turma">{'Cadastro de turma'}</Link>
      <Link to="/alunos_liberados_entrada">{'Tela de liberação de entrada'}</Link>
      <Link to="/alunos_liberados_saida">{'Tela de liberação de saida'}</Link>
      {/* <Link to="/">{'Logout'}</Link> */}
    </Menu>
  );
}
