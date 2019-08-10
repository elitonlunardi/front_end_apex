import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Banners extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/img1.jpg"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/img2.jfif"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/img3.jfif"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/img4.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }
}