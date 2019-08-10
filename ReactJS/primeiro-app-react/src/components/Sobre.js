import React from 'react';
import Topo from './topo/Topo';
import Banners from './banners/Banners';


export default class Sobre extends React.Component {
    render() {
        return (
            <div>
                <Topo/>
                <Banners/>
                <h1>Sobre</h1>
            </div>
        );
    }
}