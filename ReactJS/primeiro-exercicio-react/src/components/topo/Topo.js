import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default class Topo extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="navColor marginBottom50" bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Terceirize</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Iní­cio</Link>
                            <Link to="/contato" className="nav-link">Contato</Link>
                            <Link to="/sobre" className="nav-link">Sobre</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    };
}