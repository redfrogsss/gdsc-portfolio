import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import tick from '../img/ticks.png';
import './skills.css';

const SkillCard = (props) => {
    return (
        <div className='skill' style={{
            width: "90%"
        }}>
            <img src={tick} alt="Proficient in " className='tick' />
            <p style={{ display: "inline-block", margin: "2%" }} className='fs-4 font-monospace'>{props.children}</p>
        </div>
    );
}

const Skills = () => {
    return (
        <Container fluid id="skills" style={{ padding: "20px", height: "90vh" }}>
            <div style={{ paddingTop: "5%" }}>
                <p className="fs-1 text-center"><b>Skills</b></p>
            </div>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>Quantum Computing</SkillCard>
                        </center>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>Web Development</SkillCard>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>Data Science</SkillCard>
                        </center>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>Machine Learning</SkillCard>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>Software Engineering</SkillCard>
                        </center>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <SkillCard>DevOps</SkillCard>
                        </center>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Skills;