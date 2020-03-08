import React from 'react';
import { Form, Col, Container } from 'react-bootstrap';

export const Contact = () => (
    <Container>
        <div className="form">
            <Form>
                <h2 style={{ textAlign: "center", fontSize: 40 }}><mark style={{ backgroundColor: "yellow" }}>Contact Me</mark></h2>
                <br />
                <p style={{ textAlign: "center", textDecoration: "underline", fontSize: 22 }}><a href="mailto: 95jvill@gmail.com" target="_blank" >95jvill@gmail.com</a></p>
                <p style={{ textAlign: "center", fontSize: 20 }}>Please select the contact email if you have any questions or are interested in purchasing anything you've seen. </p>
                <p style={{ textAlign: "center", fontSize: 20 }}>I strive to respond all inquiries within in 48 hours.</p>
                <p style={{ textAlign: "center", fontSize: 20 }}>I am available for commissions as well as for shows. </p>
                <p style={{ textAlign: "center", fontSize: 20 }}>I always love to hear what viewers think of my work. I look forward to hearing from you. </p>
                <hr />
                <h4 style={{ textAlign: "center", }}><mark style={{ backgroundColor: "yellow" }}>The Vill Depiction</mark></h4>
                <p style={{ textAlign: "center", fontSize: 20 }}>Brooklyn, NY United States</p>

                <br></br>
                {/* <Form.Row style={{ marginLeft: '18%', marginRight: '20%' }}>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <br></br>
                <Form.Group controlId="formGroupEmail" style={{ marginLeft: '18%', marginRight: '20%' }}>

                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1" style={{ marginLeft: '18%', marginRight: '20%' }}>

                    <Form.Control as="textarea" rows="3" placeholder="Comment" />
                </Form.Group> */}
            </Form>
        </div>
    </Container >
)

