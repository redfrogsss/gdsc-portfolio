import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Card1 = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{props.children}</Card.Title>
                <Card.Text>
                    This is a demo project for this portfolio. 
                </Card.Text>
                <Button variant="primary">Visit my work!</Button>
            </Card.Body>
        </Card>
    );
}

const Projects = () => {
    return (
        <Container fluid id="projects" style={{ backgroundColor: "#343a40", height: "100vh" }}>
            <div style={{ padding: "5%" }}>
                <p className="fs-1 text-center text-white"><b>Projects</b></p>
            </div>
            <Row style={{ justifyContent: "center", alignItems: "center", paddingTop: "10px" }}>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1>
                            Project 1
                        </Card1>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1>
                            Project 2
                        </Card1>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1>
                            Project 3
                        </Card1>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1>
                            Project 4
                        </Card1>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1>
                            Project 5
                        </Card1>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Projects;