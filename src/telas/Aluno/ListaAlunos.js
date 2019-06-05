import React, { Component } from "react";
import api from '../../services/api';
import { DataTable } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'

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
            label: 'CPF',
            field: 'cpf',
            sort: 'asc',
            width: 270
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
    api.get(urlServidor + '/alunos')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaAlunos: resposta.data })
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