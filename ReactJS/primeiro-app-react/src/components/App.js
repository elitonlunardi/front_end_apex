import React from 'react';
import Topo from './topo/Topo';
import Banners from './banners/Banners';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Topo/>
                <Banners/>
            </div>
        );
    }
}