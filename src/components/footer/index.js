import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "@/styles/Home.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__top"]}>
                <Container>
                    <Row>
                        <Col md={4} className={styles["footer__col"]}>
                            <h5 className={styles["footer__heading"]}>ADDRESS</h5>
                            <FaMapMarkerAlt className={styles["footer__icon"]} />
                            <p className={styles["footer__text"]}>
                                Seanergy Digital Inc.
                                <span className={styles["footer__text__address"]}>
                                    <br />
                                    7800 Preston RD #115
                                    <br />
                                    Plano TX 75024.                                    
                                </span>
                            </p>
                        </Col>
                        <Col md={4} className={styles["footer__col"]}>
                            <h5 className={styles["footer__heading"]}>GET IN TOUCH</h5>
                            <FaPhone className={styles["footer__icon"]} />
                            <span className={styles["footer__info"]}>+1-469-353-2525</span>
                            <br />
                            <FaEnvelope className={styles["footer__icon"]} />
                            <span className={styles["footer__info"]}>contact@seanergydigital.com</span>
                        </Col>
                        <Col md={4} className={styles["footer__col"]}>
                            <h5 className={styles["footer__heading"]}>FOLLOW US</h5>
                            <div className={styles["footer__social-icons"]}>
                                <FaFacebookF className={styles["footer__social-icons__social-icon"]} />
                                <FaTwitter className={styles["footer__social-icons__social-icon"]} />
                                <FaLinkedinIn className={styles["footer__social-icons__social-icon"]} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles["footer__bottom"]}>
                <p className={styles["footer__bottom__copyright"]}>Seanergy Digital © 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
