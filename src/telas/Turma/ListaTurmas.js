import React, { Component } from "react";
import axios from 'axios';
import { DataTable } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'

export default class ListaTurmas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaTurmas: {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
          },
          {
            label: 'Curso',
            field: 'nome_curso',
            sort: 'asc',
          },
          {
            label: 'Período',
            field: 'periodo',
            sort: 'asc',
          },
          {
            label: 'Fase',
            field: 'fase',
            sort: 'asc',
          },
          {
            label: 'Ano/Semestre',
            field: 'ano_semestre',
            sort: 'asc',
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
    axios.get(urlServidor + '/turmas')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaTurmas: resposta.data })
        let data = { ...this.state.listaTurmas }
        data.rows = resposta.data
        console.log(data)
        this.setState({ listaTurmas: data })

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
        data={this.state.listaTurmas}
      />
    );
  }

}