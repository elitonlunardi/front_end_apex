import React from 'react';
import Topo from '../topo/Topo';
import Rodape from '../rodape/Rodape';

export default class Contato extends React.Component {
    render() {
        return (
            <div>
                <Topo />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9052657462507!2d-49.07937428524891!3d-26.90650149942507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18ec971535b9%3A0x72cb3df5857c361e!2sApex+Ensino!5e0!3m2!1spt-BR!2sbr!4v1564250210793!5m2!1spt-BR!2sbr" width="600" height="450" ></iframe>

                            </div>
                        </div>
                    </div>
                </div>
                    <Rodape />
            </div>

        );
    }
}