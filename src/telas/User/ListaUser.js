import React, { Component} from "react";
import api from '../../services/api';
import { MDBDataTable, MDBInput } from "mdbreact";
import { urlServidor } from '../../Variaveis.json'




export default class ListaUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaUsers:{
        columns:[
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
        rows:[
          {

          }
        ]
      }
    }
  }

  componentDidMount() {
    api.get(urlServidor + '/users')
      .then(resposta => {
        //se deu certo:
        //this.setState({ listaProfessores: resposta.data })
        let data = {...this.state.listaUsers}
        data.rows = resposta.data
        data.rows.map(linha => {
          linha.check = <MDBInput type="checkbox" id={`${linha.id}`} />
        });
        //console.log(data)
        this.setState( { listaUsers : data } )

      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
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