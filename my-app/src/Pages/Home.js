import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap'

export const Home = () => (
    <Container>
        {/* Landing Page */}


        {/* Carousel Start */}
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/images/pic1.jpeg")}
                    alt="First slide"
                    height="700"
                />
                <Carousel.Caption style={{ color: "white" }}>
                    <h1 bold><mark style={{ backgroundColor: "#2e2d2d", color: "white" }}>Welcome to Jo Vill's Gallery</mark></h1>

                    <Button
                        className="primaryButton"
                        variant="primary"
                        size="lg"
                        href="/gallery"
                        active
                        style={{
                            marginBottom: '35%',

                        }}>
                        View Gallery
        </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/images/pic19.jpg")}
                    alt="Third slide"
                    height="700"
                />

                <Carousel.Caption style={{ color: "white" }}>
                    <h1 bold><mark style={{ backgroundColor: "#2e2d2d", color: "white" }}>Welcome to Jo Vill's Gallery</mark></h1>

                    <Button
                        className="primaryButton"
                        variant="primary"
                        size="lg"
                        href="/gallery"
                        active
                        style={{
                            marginBottom: '35%',

                        }}>
                        View Gallery
        </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/images/pic3.jpeg")}
                    alt="Third slide"
                    height="700"
                />

                <Carousel.Caption style={{ color: "white" }}>
                    <h1 bold><mark style={{ backgroundColor: "#2e2d2d", color: "white" }}>Welcome to Jo Vill's Gallery</mark></h1>

                    <Button
                        className="primaryButton"
                        variant="primary"
                        size="lg"
                        href="/gallery"
                        active
                        style={{
                            marginBottom: '35%',

                        }}>
                        View Gallery
        </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <br></br>
        {/* Carousel End */}
    </Container>
)