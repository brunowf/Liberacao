import React, { Component } from "react";
import axios from 'axios';
import { DataTable } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'

<<<<<<< HEAD



=======
>>>>>>> 47955d267414094c69d30dc99bf3914e6de6f480
export default class ListaAlunos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaAlunos: {
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
<<<<<<< HEAD
            label: 'E-mail',
            field: 'email',
=======
            label: 'CPF',
            field: 'cpf',
>>>>>>> 47955d267414094c69d30dc99bf3914e6de6f480
            sort: 'asc',
            width: 270
          },
          {
<<<<<<< HEAD
            label: 'Senha',
            field: 'senha',
            sort: 'asc',
            width: 200
          },
          {
=======
>>>>>>> 47955d267414094c69d30dc99bf3914e6de6f480
            label: 'Data de Cadastro',
            field: 'create_time',
            sort: 'asc',
            width: 200
          },
        ],
        rows: [
          {

          }
        ]
      }
    }
  }

  componentDidMount() {
<<<<<<< HEAD
    axios.get(urlServidor + '/users/alunos')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaProfessores: resposta.data })
=======
    axios.get(urlServidor + '/alunos')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaAlunos: resposta.data })
>>>>>>> 47955d267414094c69d30dc99bf3914e6de6f480
        let data = { ...this.state.listaAlunos }
        data.rows = resposta.data
        console.log(data)
        this.setState({ listaAlunos: data })

      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }
  render() {
    return (
      <DataTable
        striped
        bordered
        hover
        data={this.state.listaAlunos}
      />
    );
  }

}