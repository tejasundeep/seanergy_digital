import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";

function CoreValues() {
    return (
        <div className={styles["coreValues"]}>
            <Container className={styles["coreValues__container"]}>
                <Row className={styles["coreValues__header"]}>
                    <Col>
                        <h1 className={styles["coreValues__header__title"]}>Our Core Values</h1>
                        <p className={styles["coreValues__header__intro"]}>
                            Values that drive our daily actions and decisions
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles["coreValues__item"]}>
                        <a href="#" className={styles["coreValues__link"]}>
                            <h2 className={styles["coreValues__icon"]}>P</h2>
                            <h4 className={styles["coreValues__heading"]}>PERFORMANCE</h4>
                            <p className={styles["coreValues__description"]}>
                                Focus on Quality of deliverables and demand more
                                from ourselves than our customers do
                            </p>
                        </a>
                    </Col>
                    <Col className={styles["coreValues__item"]}>
                        <a href="#" className={styles["coreValues__link"]}>
                            <h2 className={styles["coreValues__icon"]}>R</h2>
                            <h4 className={styles["coreValues__heading"]}>RESPECT</h4>
                            <p className={styles["coreValues__description"]}>
                                Treat every one with dignity and honor ethnic
                                diversity across the organization
                            </p>
                        </a>
                    </Col>
                    <Col className={styles["coreValues__item"]}>
                        <a href="#" className={styles["coreValues__link"]}>
                            <h2 className={styles["coreValues__icon"]}>I</h2>
                            <h4 className={styles["coreValues__heading"]}>INTEGRITY</h4>
                            <p className={styles["coreValues__description"]}>
                                Be trustworthy and committed to our customers
                                and fellow employees
                            </p>
                        </a>
                    </Col>
                    <Col className={styles["coreValues__item"]}>
                        <a href="#" className={styles["coreValues__link"]}>
                            <h2 className={styles["coreValues__icon"]}>Z</h2>
                            <h4 className={styles["coreValues__heading"]}>ZEAL</h4>
                            <p className={styles["coreValues__description"]}>
                                To learn new skills and provide innovative
                                solutions to our customers
                            </p>
                        </a>
                    </Col>
                    <Col className={styles["coreValues__item"]}>
                        <a href="#" className={styles["coreValues__link"]}>
                            <h2 className={styles["coreValues__icon"]}>E</h2>
                            <h4 className={styles["coreValues__heading"]}>EMPATHY</h4>
                            <p className={styles["coreValues__description"]}>
                                Ability to understand the needs of our clients
                                and communicate in a clear and effective way
                            </p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CoreValues;
