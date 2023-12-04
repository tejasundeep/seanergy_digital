import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

function Certifications() {
    return (
        <div className={styles["certifications"]}>
            <Container>
                <h1 className={styles["certifications__title"]}>
                    Certifications
                </h1>
                <p className={styles["certifications__description"]}>
                    Quality never goes out of style
                </p>

                <Row className={styles["certifications__row"]}>
                    <Col lg={4} md={4} sm={4}>
                        <Image
                            src="/certifications/ISO.png"
                            className={styles["certifications__image"]}
                            alt="ISO"
                            width={175}
                            height={175}
                        />
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <Image
                            src="/certifications/ISO01.png"
                            className={styles["certifications__image"]}
                            alt="ISO"
                            width={175}
                            height={175}
                        />
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <Image
                            src="/certifications/Hipaa.png"
                            className={styles["certifications__image"]}
                            alt="Hipaa"
                            width={175}
                            height={175}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Certifications;
