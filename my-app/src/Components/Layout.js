import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container>
        <br></br>
        {props.children}
    </Container>
)