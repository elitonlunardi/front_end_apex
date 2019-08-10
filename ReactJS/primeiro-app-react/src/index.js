import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './index.css';


ReactDom.render(
    //    <App />, 
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" exact={true} component={Sobre} />
            <Route path="/contato" exact={true} component={Contato} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);