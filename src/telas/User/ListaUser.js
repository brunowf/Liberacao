import React, { Component } from "react";
import axios from 'axios';
import { MDBDataTable, MDBInput } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'


export default class ListaUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: false,
      userIdAtual: '',
      userNomeAtual: '',
      userEmailAtual: '',
      userSenhaAtual: '',
      userTelefoneAtual: '',
      userTipoAtual: '',
      userNomeNovo: '',
      userEmailNovo: '',
      userSenhaNovo: '',
      userTelefoneNovo: '',
      userTipoNovo: '',
      listaUsers: {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Nome',
            field: 'nome',
            sort: 'asc',
            width: 150
          },
          {
            label: 'E-mail',
            field: 'email',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Senha',
            field: 'senha',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Data de Cadastro',
            field: 'create_time',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Ativo',
            field: 'ativo',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Telefones',
            field: 'telefones',
            sort: 'asc',
            width: 200
          },
          // {
          //   label: 'Registros de Saídas',
          //   field: 'registros_saidas',
          //   sort: 'asc',
          //   width: 200
          // },
          // {
          //   label: 'Registros de Entradas',
          //   field: 'registros_entradas',
          //   sort: 'asc',
          //   width: 200
          // },
        ],
        rows: [
          {

          }
        ]
      }
    }
  }

  toggleCollapse() {
    let colapsado = ''
    if (this.state.collapseID === false) {
      colapsado = true
    } else {
      colapsado = false
    }
    this.setState({ collapseID: colapsado })
  }

  componentDidMount() {
    axios.get(urlServidor + '/users')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaProfessores: resposta.data })
        let data = { ...this.state.listaUsers }
        data.rows = resposta.data
        data.rows.map(linha => {
          linha.check =
            <MDBInput type="checkbox" id={`${linha.id}`} />
        });
        data.rows.map(linha => {
          linha.edit =
            <div>
              <button color="primary" onClick={() => this.toggleCollapse() + this.setState({ userIdAtual: linha.id, userNomeAtual: linha.userNome, userEmailAtual: linha.userEmail, userSenhaAtual: linha.userSenha, userTelefoneAtual: linha.userTelefone, userTipoAtual: linha.userTelefone })}>
                Editar
              </button>
            </div>
        })
       
        data.rows.map(linha => {
          // data.rows = linha.slice(1,2)
          linha.delete =
            <div className='tyleBotao'>
              <button onClick={() => this.userDelete(linha.id)}>Deletar</button>
            </div>;
          console.log(linha.perfis)
        });
        //console.log(data)
        this.setState({ listaUsers: data })

      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }


  
  userEditar() {
    axios.put(urlServidor + '/users/' + this.state.userIdAtual, {
      id: this.state.userIdAtual,
      nome_user: this.state.userNomeNovo,
      email_user: this.state.userEmailNovo,
      user_senha: this.state.userSenhaNovo,
      telefone: this.state.userTelefoneNovo,
      tipo: this.state.userTipoNovo
    })
  }

  userDelete(idzin) {
    axios.delete(urlServidor + '/users/' + idzin)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('User deletada')
        window.location.reload();
      }).catch(resposta => {
        //se der errado
        console.log(resposta);
        alert('Dados incorretos!');
      })
  }



  render() {
    return (
      <MDBDataTable
        scrollY
        scrollX
        striped
        bordered
        hover
        data={this.state.listaUsers}
      />
    );
  }

}