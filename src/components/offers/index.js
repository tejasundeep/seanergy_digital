import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "@/styles/Home.module.scss";

function OurOfferings() {
    return (
        <div className={styles["offerings"]}>
            <Container>
                <div className={styles["offerings__heading"]}>
                    <h1 className={styles["offerings__title"]}>Our Offerings</h1>
                    <p className={styles["offerings__subtitle"]}>Experience IT digitally</p>
                </div>

                <Row className={`${styles["offerings__row"]} mb-4`}>
                    <Col lg={3} md={3} sm={6}>
                        <a href="BusinessIntelligence.html" className={styles["offerings__link"]}>
                            <Image src="offerings/BI.png" fluid alt="Analytics" className={styles["offerings__image"]} />
                            <h4 className={styles["offerings__item-title"]}>Analytics</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Consulting.html" className={styles["offerings__link"]}>
                            <Image src="offerings/Productdevelopment.png" fluid alt="Domain Consulting" className={styles["offerings__image"]} />
                            <h4 className={styles["offerings__item-title"]}>Domain Consulting</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Webapp.html" className={styles["offerings__link"]}>
                            <Image src="offerings/Webapp.png" fluid alt="Product Engineering" className={styles["offerings__image"]} />
                            <h4 className={styles["offerings__item-title"]}>Product Engineering</h4>
                        </a>
                    </Col>

                    <Col lg={3} md={3} sm={6}>
                        <a href="Mobiledevelopment.html" className={styles["offerings__link"]}>
                            <Image src="offerings/Mobiledevelopment.png" fluid alt="Mobility" className={styles["offerings__image"]} />
                            <h4 className={styles["offerings__item-title"]}>Mobility</h4>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurOfferings;
