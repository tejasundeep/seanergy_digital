import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";

const SuccessStories = () => {
    return (
        <div className={styles["success_stories"]}>
            <Container fluid>
                <div className={styles["success_stories__heading"]}>
                    <h1>Our Success Stories</h1>
                    <p>Quality never goes out of style</p>
                </div>

                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <h1>Transit and Transportation</h1>
                        <p>
                            A transportation Company finding new paths to gain
                            unified access into all the segregated data.
                        </p>
                        <a href="Keolis_Casestudy.html">Success Stories</a>
                    </Col>

                    <Col lg={6} md={6} sm={6}>
                        <h1>Redefining Driver Retention</h1>
                        <p>
                            How a large shipping company overcame industry's biggest
                            problem, driver retention.
                        </p>
                        <a href="Driversync_casestudy.html">Success Stories</a>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default SuccessStories;
