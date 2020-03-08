import React from 'react';
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
{/* Navbar */ }

export const NavigationBar = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand style={{ fontSize: 20, padding: 5, paddingTop: 10, border: "solid white" }} href="/">Jo Vill</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav style={{ fontSize: 20, padding: 5, paddingTop: 10, }}>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>


)