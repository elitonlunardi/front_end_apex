import React from 'react';
import Topo from './topo/Topo';
import Conteudo from './conteudo/Conteudo';
import Rodape from './rodape/Rodape';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Topo />
                <Conteudo />
                <Rodape />
            </div>
        );
    }
}