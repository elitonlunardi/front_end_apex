import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import Contato from './components/contato/Contato';
import Sobre from './components/sobre/Sobre';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


ReactDom.render(
    //    <App />, 
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/contato" exact={true} component={Contato} />
            <Route path="/sobre" exact={true} component={Sobre} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);