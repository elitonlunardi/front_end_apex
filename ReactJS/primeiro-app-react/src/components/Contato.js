import React from 'react';
import Topo from './topo/Topo';
import Banners from './banners/Banners';


export default class Contato extends React.Component {
    render() {
        return (
            <div>
                <Topo/>
                <Banners/>
                <h1>Contato</h1>
            </div>
        );
    }
}