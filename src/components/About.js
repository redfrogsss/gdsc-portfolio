import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dev from "./dev.png";

export default function About() {
    return (
        <Container>
            <h1 style={{ width: "100", textAlign: "center" }}>About me</h1>
            <Row>
                <Col sm={6} md={5} lg={{ span: 4, offset: 1 }}>
                    <img
                        src={dev}
                        alt="Developer"
                    ></img>
                </Col>
                <Col sm={6}>

                </Col>
            </Row>
        </Container>
    );
}