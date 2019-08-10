import React from 'react';
import ReactDOM from 'react-dom';

class Estrutura extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nomeCurso: "",
            valorCurso: "",
            cursos: [],
        }
    }


    eventChange = (elemento) => {
        var tipoCampo = elemento.target.name;

        if (tipoCampo === "curso") {
            this.setState({ nomeCurso: elemento.target.value });
        }
        else {
            this.setState({ valorCurso: elemento.target.value });
        }
    }

    cadastrarCurso = () => {
        this.setState(obj => {
            obj.cursos.push({ curso: this.state.nomeCurso, valor: this.state.valorCurso })
        })

        this.setState({ nomeCurso: "", valorCurso: "" })
        console.log(this.state.cursos);
    }

    excluir = (elemento) => {
        var indice = elemento.target.value;

        var copiaVetor = this.state.cursos;

        copiaVetor.splice(indice, 1);

        this.setState({ cursos: copiaVetor });
    }
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <form>
                    <input onChange={this.eventChange} value={this.state.nomeCurso} type="text" placeholder="Curso" name="curso" />
                    <input onChange={this.eventChange} value={this.state.valorCurso} type="text" placeholder="Valor" name="valor" />
                    <input onClick={this.cadastrarCurso} type="button" value="Cadastrar" />
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Curso</th>
                            <th>Valor</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cursos.map((indice, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{indice.curso}</td>
                                <td>{indice.valor}</td>
                                <td><button onClick={this.excluir} value={index} >Excluir</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )

    }
}

class Requisicao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
        this.obterDados();
    }

    obterDados = () => {
        var url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(dados => dados.json())
            .then(this.carregarDados);
    }

    enviarDados = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: '87987',
                body: '554654654',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    carregarDados = (dados) => {
        this.setState({ lista: dados })
    }

    render() {
        return (
            <div>
                <h1>Resposta da API: </h1>
                <ul>
                    {this.state.lista.map((item, indice) =>
                        <li key={indice}>{item.id}</li>
                    )}
                </ul>
                <button onClick={this.enviarDados}>Cadastrar</button>
            </div>
        )
    }
}

ReactDOM.render
    (
        // <Estrutura titulo="Aplicação base em react" />,
        <Requisicao />,
        document.getElementById('root')
    );