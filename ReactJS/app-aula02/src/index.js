import React from 'react';
import ReactDOM from 'react-dom';

class Estrutura extends React.Component {
    render() {
        return (
            <h1>{this.props.mensagem}</h1>
        )

    }
}

ReactDOM.render
    (
        <Estrutura mensagem="Props no react" />,
        document.getElementById('root')
    );