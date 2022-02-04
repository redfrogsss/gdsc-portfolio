import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactMe = () => {
    return (
        <Container fluid id='contact' style={{ backgroundColor: "#343a40", padding: "20px" }}>
            {/* <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Contact Me</h1> */}
            <div style={{ paddingTop: "2.5%" }}>
                <p className="fs-1 text-center text-white"><b>Contact Me</b></p>
            </div>
            <div style={{ paddingLeft: "25%", paddingRight: "25%", paddingTop: "1%"}}>
                <center>
                    <Row>
                        <Col>
                            <SocialIcon url='https://twitter.com/redfrogss' />
                        </Col>
                        <Col>
                            <SocialIcon url='https://www.linkedin.com/in/jacky-fan-682516190/' />
                        </Col>
                        <Col>
                            <SocialIcon url='https://github.com/redfrogsss' fgColor="#dee2e6" />
                        </Col>
                    </Row>
                </center>
            </div>
            {/* <Row style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Col sm={6} md={3} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialIcon url='https://twitter.com/redfrogss' />
                </Col>
                <Col sm={6} md={3} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialIcon url='https://www.linkedin.com/in/jacky-fan-682516190/' />
                </Col>
                <Col sm={6} md={3} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialIcon url='https://github.com/redfrogsss' fgColor="#dee2e6" />
                </Col>
            </Row> */}
            <div style={{ paddingTop: "2.5%" }} />
        </Container>
    );
};

export default ContactMe;