import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dev from "./dev.png";
import ReactRoundedImage from "react-rounded-image";
import myIcon from "../img/icon.jpeg";

export default function About() {
    return (
        <Container id="about">
            {/* <h1 style={{ width: "100", textAlign: "center" }}>About me</h1> */}
            <p className="fs-1 text-center">About Me</p>
            <Row>
                <Col sm={12} md={5} lg={6}>
                    <img
                        src={dev}
                        alt="Developer"
                        width="100%"
                    ></img>
                </Col>
                <Col sm={12} lg={6}>
                    <center>
                        <ReactRoundedImage image={myIcon} />
                    </center>
                    <p className="fs-3 text-center font-monospace">Jacky FAN</p>
                    <p className="text-center font-monospace lh-sm">
                        An university student studing Computing in The Hong Kong Polytechnic University.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}