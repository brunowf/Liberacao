import React, { Component } from "react";
import api from '../../services/api';
import { DataTable } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'

export default class ListaProfessores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProfessores: {
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
    api.get(urlServidor + '/users/professores')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaProfessores: resposta.data })
        let data = { ...this.state.listaProfessores }
        data.rows = resposta.data
        console.log(data)
        this.setState({ listaProfessores: data })

      })
      // .catch(resposta => {
      //   //se deu errado:
      //   alert('Deu errado!')
      //   console.log(resposta)
      // })
      .catch(erro => {
          if (erro.response.status === 403) {
              this.props.history.push("/");    
          }
      })
  }
  render() {
    return (
      <DataTable
        striped
        bordered
        hover
        data={this.state.listaProfessores}
      />
    );
  }

}