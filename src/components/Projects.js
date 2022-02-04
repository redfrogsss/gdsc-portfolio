import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import tick from '../img/ticks.png';

const Card1 = () => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
                        <Card1 />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1 />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1 />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1 />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1 />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div style={{ padding: "2.5%" }}>
                        <Card1 />
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Projects;