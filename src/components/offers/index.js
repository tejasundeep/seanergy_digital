import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "@/styles/Home.module.scss";

function OurOfferings() {
    return (
        <div className={styles["our_offerings"]}>
            <Container>
                <div className={styles["our_offerings__heading"]}>
                    <h1>Our Offerings</h1>
                    <p>Experience IT digitally</p>
                </div>

                <Row className="text-center">
                    <Col lg={3} md={3} sm={6}>
                        <a href="BusinessIntelligence.html">
                            <Image src="offerings/BI.png" fluid alt="Analytics" />
                            <h4>Analytics</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Consulting.html">
                            <Image src="offerings/Productdevelopment.png" fluid alt="Domain Consulting" />
                            <h4>Domain Consulting</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Webapp.html">
                            <Image src="offerings/Webapp.png" fluid alt="Product Engineering" />
                            <h4>Product Engineering</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Mobiledevelopment.html">
                            <Image src="offerings/Mobiledevelopment.png" fluid alt="Mobility" />
                            <h4>Mobility</h4>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurOfferings;
