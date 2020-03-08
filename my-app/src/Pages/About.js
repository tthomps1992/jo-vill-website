import React from 'react';
import { Jumbotron, Container, Col, Row, Button, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import styled from 'styled-components';

export const About = () => (
    <Container>
        <Row>
            <Col style={{ marginTop: 15, paddingRight: 10 }}>
                <img
                    className="d-block w-100"
                    src={require('../assets/images/pic1.jpeg')}
                />
            </Col>
            <Col>
                <h2 style={{ color: "red", fontSize: 40 }}>About the Artist</h2>
                <hr />
                <p style={{ fontSize: 20 }}>Jo Vill is a New York native born to Haitian immigrant parents. Jo Vill is a self taught artist who decided as a need to fill the time created by retirement to revisit the world of art. As a young teenager, Jo always scribbled with pen and pencil, but was discouraged by comments from his father. Instead of seeking out to make a career in art, Jo took a different route. Now, at age 63, driven by a source that he cannot explain, Jo finds a source of comfort in the creative process and has fallen in love with at all over again. After rekindling a passion, he wishes to share with the world the talent he has had all along in a way that will empower all that sees his work.</p>
            </Col>

        </Row>
        <br />
        <div>

        </div>

    </Container>
)



