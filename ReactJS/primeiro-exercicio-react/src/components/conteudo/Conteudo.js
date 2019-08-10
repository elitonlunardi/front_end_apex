import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Conteudo extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row marginBotton25">
                    <div className="col-md-4">
                        <Card className="bgColor">
                            {/* // style={{ width: '18rem' }}> */}
                            <Card.Img variant="top" src="./img/img1.jfif" />
                            <Card.Body>
                                <Card.Title>Lote 1</Card.Title>
                                <Card.Text>
                                    Fechar o lado tendesse.
                                </Card.Text>
                                <Button className="cardBtnButton" variant="outline-warning">Candidatar</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card className="bgColor">
                            {/* // style={{ width: '18rem' }}> */}
                            <Card.Img variant="top" src="./img/img2.jfif" />
                            <Card.Body>
                                <Card.Title>Lote 2</Card.Title>
                                <Card.Text>
                                    Colocar bolso tendesse.
                                </Card.Text>
                                <Button className="cardBtnButton" variant="outline-warning">Candidatar</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card className="bgColor">
                            {/* // style={{ width: '18rem' }}> */}
                            <Card.Img variant="top" src="./img/img3.jfif" />
                            <Card.Body>
                                <Card.Title>I have no idea what I'm doing</Card.Title>
                                <Card.Text>
                                    oh o gas
                                </Card.Text>
                                <Button className="cardBtnButton" variant="outline-warning">Candidatar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card className="bgColor">
                            {/* // style={{ width: '18rem' }}> */}
                            <Card.Img variant="top" src="./img/img4.jfif" />
                            <Card.Body>
                                <Card.Title>A história se repete</Card.Title>
                                <Card.Text>
                                    merece
                                </Card.Text>
                                <Button className="cardBtnButton" variant="outline-warning">Candidatar</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card className="bgColor">
                            {/* // style={{ width: '18rem' }}> */}
                            <Card.Img variant="top" src="./img/img5.jfif" />
                            <Card.Body>
                                <Card.Title>A história se repete novamente, pois é</Card.Title>
                                <Card.Text>
                                    Alo jefão, the aumento is comeback real PUF
                                </Card.Text>
                                <Button className="cardBtnButton" variant="outline-warning">Candidatar</Button>                        
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}