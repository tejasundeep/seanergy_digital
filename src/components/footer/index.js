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
        <footer className={styles["footer"]}>
            <div className={styles["footer-top"]}>
                <Container>
                    <Row>
                        <Col md={4} className={styles["footer-col"]}>
                            <h5>ADDRESS</h5>
                            <FaMapMarkerAlt />
                            <p>
                                Seanergy Digital Inc.
                                <span>
                                    <br />
                                    7800 Preston RD #115
                                    <br />
                                    Plano TX 75024.                                    
                                </span>
                            </p>
                        </Col>
                        <Col md={4} className={styles["footer-col"]}>
                            <h5>GET IN TOUCH</h5>
                            <FaPhone />
                            <span>+1-469-353-2525</span>
                            <br />
                            <FaEnvelope />
                            <span>contact@seanergydigital.com</span>
                        </Col>
                        <Col md={4} className={styles["footer-col"]}>
                            <h5>FOLLOW US</h5>
                            <div className="social-icons">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles["footer-bottom"]}>
                <p className="m-0">Seanergy Digital © 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
