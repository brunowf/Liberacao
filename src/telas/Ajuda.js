import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


export default class Ajuda extends Component{

  render(){
    return(
      <div className="container">
        <h1>Menu de Ajuda</h1>
        <div className="card">
          <div className="cord-body">
              <div>
                <h2>Login</h2>
                <img className="" src="imagens/Tela_login.png" width="750" height="400" ></img>
                <p className="h5">
                   1. Digite seu email no campo Email;<br></br>
                   2. Digite sua senha no campo Senha;<br></br>
                   3. Você será redirecionado para tela Menu.
                </p>
              </div>
              <br></br>
              <div>
              <h2>Menu</h2>
                <img className="" src="imagens/tela menu.png" width="750" height="400" ></img>
                <p className="h5">
                  1. Escolha a página de destino na lista do menu do lado esquerdo;<br></br>
                  2. Clique no nome da página para ir à página de destino;<br></br>
                  3. O menu esquerdo está acessível a partir de qualquer página.
                </p>
              </div>
              <br></br>
              <div>
              <h2>Cadastro de Entrada</h2>
                <img className="" src="imagens/tela_cadastro_entrada.png" width="750" height="400" ></img>
                <p className="h5">
                  1.Inserir o CPF do aluno já cadastrado;<br></br>
                  2.O sistema irá alto preencher os demais campos;<br></br>
                  3.Adicionar o professor atual para que ele receba uma notificação;<br></br>
                  4.Selecionar a Turma que o aluno está ativo no período;<br></br>
                  5.Selecionar o(s) dia(s), que o aluno deverá ser liberado.<br></br>
                  6.Salvar
                </p>
              </div>
              <br></br>
              <div>
                <h2>Cadastro Saida</h2>
                <img className="" src="imagens/tela_cadastro_saida.png" width="750" height="400" ></img>
                <p className="h5">
                  1.Inserir o CPF do aluno já cadastrado;<br></br>
                  2.O sistema irá alto preencher os demais campos;<br></br>
                  3.Selecionar a Turma que o aluno está ativo no período;<br></br>
                  4.Selecionar o(s) dia(s), que o aluno deverá ser liberado.<br></br>
                  5.Salvar
                </p>
              </div>
              <br></br>
              <div>
                <h2>Cadastro de Usuario</h2>
                <img className="" src="imagens/tela_cadastro_user.png" width="750" height="600" ></img>
                <p className="h5">
                <h4>Cadastro de Guarda</h4>
                  1.Insira o nome do guarda;<br></br>
                  2.Insira o email do guarda;<br></br>
                  3.Insira uma senha para o guarda;<br></br>
                  4.Insira o telefone do guarda;<br></br>
                  5.Insira o tipo de usuário como guarda.<br></br>
                <h4>Cadastro de Administrador</h4>
                  1.Insira o nome do administrador;<br></br>
                  2.Insira o email do administrador;<br></br>
                  3.Insira uma senha para o administrador;<br></br>
                  4.Insira o telefone do administrador;<br></br>
                  5.Insira o tipo de usuário como administrador
                </p>
              </div>
              <br></br>
              <div>
                <h2>Cadastro de Professor</h2>
                <img className="" src="imagens/tela_cadastro_professor.png" width="750" height="600" ></img>
                <p className="h5">
                  1.Insira o nome do professor;<br></br>
                  2.Insira o email do professor;<br></br>
                  3.Insira uma senha para o professor;<br></br>
                  4.Insira o telefone do professor;
                </p>
              </div>
              <br></br>
              <div>
                <h2>Cadastro de Aluno</h2>
                <img className="" src="imagens/tela_cadastro_aluno.png" width="750" height="600" ></img>
                <p className="h5">
                    <h4>Cadastro de Aluno</h4>
                      1.Insira o CPF do aluno;<br></br>
                      2.Insira o nome do aluno;<br></br>
                      3.Insira a data de nascimento do aluno;<br></br>
                      4.Insira o nome do responsável;<br></br>
                      5.Insira o email do responsável;<br></br>
                      6.Clique no botão foto e faça o upload da foto do aluno;<br></br>
                      7.Selecione uma turma para o aluno;<br></br>
                      8.Caso a turma não exista vá à página de Turmas e faça o cadastro da mesma;<br></br>
                      9.Clique no botão Cadastrar e verifique se o aluno está incluso na lista de alunos cadastrados no topo.>
                    <h4>Edição dos dados do Aluno</h4>
                      1.Pesquise pelo nome do aluno ou pelo CPF do aluno no campo Search;<br></br>
                      2.Clique no botão Editar na linha do aluno em questão;<br></br>
                      3.Altere os dados necessários;<br></br>
                      4.Clique no botão Salvar.
                </p>
              </div>
              <br></br>
              <div>
                <h2>Cadastro de Turma</h2>
                <img className="" src="imagens/tela_cadastro_turma.png" width="750" height="600" ></img>
                <p className="h5">
                  <h4>Cadastro de Turma</h4>
                    1.Insira nome da turma;<br></br>
                    2.Insira a atual fase da turma;<br></br>
                    3.Insira o ano e semestre atual;<br></br>
                    4.Escolha o turno da turma.
                  <h4>Edição de turma</h4>
                    1.Escolha turma a ser editada e clique no botão editar;<br></br>
                    2.Ao abrir o menu logo abaixo da lista, Insira os novos dados e clique em salvar.
                </p>
              </div>
              <br></br>
              <div>
                <h2>Liberação Entrada</h2>
                <img className="" src="imagens/tela_liberados_entrada.png" width="750" height="500" ></img>
                <p className="h5">
                  Esta tela somente o professor tem acesso, <br></br>
                  e demonstram os alunos que têm permissão para a entrada tardia em sala de aula. 
                </p>
              </div>
              <br></br>
              <div>
                <h2>Liberação Saida</h2>
                <img className="" src="imagens/tela_liberados_entrada.png" width="750" height="500" ></img>
                <p className="h5">
                  Esta página, tanto o professor com o guarda tem acesso, <br></br>
                  ela demonstra os alunos que estão liberados para sair mais cedo das aulas.
                </p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}