import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//Marcio
export default class CadastroAluno extends Component {
    render() {
        return (
            <div id="App">
                <div id="page-wrap">
                    <h1>Cadastro Aluno</h1>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <form>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <input class="from-Control" placeholder="CPF"></input>
                                                </div>
                                                <div class="form-group">
                                                    <input class="from-Control" placeholder="CPF"></input>
                                                </div>

                                                <div class="form-group">
                                                    <input type="date" class="from-Control " placeholder="CPF"></input>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <input class="from-Control" placeholder="CPF Resp"></input>
                                                </div>
                                                <div class="form-group">
                                                    <input class="from-Control" placeholder="Nome Resp"></input>
                                                </div>
                                                <div >
                                                    <input class="from-Control" placeholder="Email Resp"></input>
                                                </div>
                                            </div>
                                        </div>     
                                    </form> 
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                        <img class="card-img-top" src="src/saturno.jpg" alt="Card image cap"></img>
                                        <a href="#" class="btn btn-primary">CAPTURAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </div>
            </div>
        );
    }
}