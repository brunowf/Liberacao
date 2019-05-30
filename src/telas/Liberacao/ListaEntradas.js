import React, { Component } from "react";
import axios from 'axios';
import { DataTable } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'

export default class ListaEntradas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEntradas: {
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
        ],
        rows: [
          {

          }
        ]
      }
    }
  }

  componentDidMount() {
    axios.get(urlServidor + '/users/entradas')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaEntradas: resposta.data })
        let data = { ...this.state.listaEntradas }
        data.rows = resposta.data
        console.log(data)
        this.setState({ listaEntradas: data })

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
        data={this.state.listaEntradas}
      />
    );
  }

}