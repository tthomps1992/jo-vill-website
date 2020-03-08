import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import joImage_1 from '../assets/images/pic4.jpg';
import '../assets/CSS/font.css';


const Styles = styled.div`
.jumbo {
    background: url(${joImage_1}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 250px;
    position: relative;
    z-index: -2;
}

.overlay {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 style={{ fontFamily: 'Open Sans Condensed', fontSize: 100, textAlign: "center" }}>The Vill Depiction</h1>
                <p style={{ textAlign: "center" }}></p>
            </Container>

        </Jumbo>
    </Styles>
)