import React, { useState } from "react";
import MetaData from "@/components/head";
import NavBar from "@/components/navbar";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import { Col, Container, Row, Modal, Card, Button } from "react-bootstrap";
import styles from "@/styles/About.module.scss";
import Image from "next/legacy/image";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    const bannerData = {
        image: "/banners/about.jpg",
        title: "About Us",
        align: "text-left",
    };

    const metaInfo = {
        title: ":: Empowering Digital Business ::",
        desc:
            "Seanergy Digital Services Empowering Digital Business is the No 1 provider of integrated business, technology, consulting, testing, and process solutions on a global delivery platform",
        keywords:
            "Business Intelligence, Balanced Scorecard, Data Marts, Data Warehouse, Online Analytical Processing, Strategic Business Intelligence, MeasureFact, Hierarchy dimension, Reports, KPI, ETL, Forecasting, Cube, ASP.Net MVC Framework, LINQ, Web services, Client-side web development technologies, Bootstrap,  Business Intelligence tools, BI Analytics, Open Source Business Intelligence, IT Services, IT Consulting, Product Engineering Solutions, Technology Infrastructure Services, Business Process Outsourcing, Business Process Transformation, Consulting Services, Customer Experience, security solutions, storage solutions, Business Objects, Business Solutions, ASP.NET, ASP.NET MVC, ASP.NET MVC4, ASP.NET Web API, Angularjs, jQuery, SQL Server, SharePoint, MSBL, data mining, Predictive Analytics, Data & Analytics, Digital Transformation, Quality Assurance, Business Intelligence, Cognitive Abilities, Logistics, Transportation, Healthcare, Offshore Product development, Supply chain, Domain Consulting, Product Engineering, Mobility, Driver Sync, Uniview, Ugethelp, Rohit Sehgal, Sriram Nallam, Seanergy Digital, Seanergy Softech, Seanergy Consulting Services, Reengineering, Web App Development, Mobile App Development, Enterprise App Development, UI/UX Services, Legacy Modernization, Cloud Technologies, Data Strategy, Data Integration, Big Data, Predictive Analytics, Test Automation, Functional Testing, Mobile App Testing, Securing Testing, Performance Testing, Web Services/API Testing, Big Data/Analytics Testing, DevOps, Machine Learning, Natural Language Processing, Internet of things (IoT), Intelligent Chat Bots, Build Operate and Transfer (BOT), Staff Augmentation, IT implementation, Dispatch Control System, Shipment Tracking System, Incident Management System",
    };
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    // Function to handle opening and closing of the first modal
    const handleModal1 = () => setShowModal1(!showModal1);

    // Function to handle opening and closing of the second modal
    const handleModal2 = () => setShowModal2(!showModal2);
    return (
        <>
            <MetaData metaInfo={metaInfo} />
            <main className={styles["about"]}>
                <NavBar />
                <Banner bannerText={bannerData} />
                <Container className="my-5">
                    <Row>
                        <Col>
                            <p>
                                Seanergy digital is the USA-based Global
                                Software Solutions Company providing Digital
                                transformation for enterprises and technology
                                providers by delivering seamless customer
                                experience, business efficiency, and actionable
                                insights through an integrated set of disruptive
                                technologies and services across various domains
                                like end-to-end management consulting, Design
                                and Development across Business Intelligence,
                                Product Engineering and Product Support, Quality
                                Assurance, Custom Application Development, both
                                Web & Mobile, Infrastructure management, Big
                                Data Analytics, and Business Process
                                Outsourcing.
                            </p>
                            <p>
                                Seanergy actively partners with our clients in
                                offering end-to-end product development and
                                software services with a heavy focus on
                                Enterprise Data Management and Next-Generation
                                Technology Adoptions, thereby driving businesses
                                to realize the value and true potential of Data.
                            </p>
                            <p>
                                Seanergy digital has been serving a diverse
                                clientele across a broad spectrum of industries
                                for top public transit, logistics, and
                                Healthcare companies who are constantly
                                leveraging the business-edge IT solutions.
                            </p>
                        </Col>
                    </Row>
                    <Row className={`${styles["about__content"]} text-center`}>
                        <h1>Our Leadership</h1>
                        <Col md={6}>
                            <div onClick={handleModal1}>
                                <Image
                                    src="/about/Sriram.png"
                                    width={250}
                                    height={250}
                                    layout="fixed"
                                    alt="Sriram Nallam"
                                />
                                <h3>
                                    SRIRAM NALLAM
                                    <span>Founder and Chairman</span>
                                </h3>
                            </div>
                            <a href="https://www.linkedin.com/in/sriramnallam/">
                                <FaLinkedinIn />
                            </a>
                        </Col>
                        <Col md={6}>
                            <div onClick={handleModal2}>
                                <Image
                                    src="/about/Rohit.png"
                                    width={250}
                                    height={250}
                                    layout="fixed"
                                    alt="Rohit Sehgal"
                                />
                                <h3>
                                    ROHIT SEHGAL
                                    <span>Chief Executive Officer</span>
                                </h3>
                            </div>
                            <a href="https://www.linkedin.com/in/sehgalrohit/">
                                <FaLinkedinIn />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Modal show={showModal1} onHide={handleModal1}>
                <Modal.Body>
                    <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src="/about/Sriram.png" />
                        <Card.Body>
                            <Card.Title>Rohit Sehgal</Card.Title>
                            <Card.Text>
                                Rohit, in his role as Chief Executive Officer,
                                manages and oversees all aspects of
                                Seanergy&apos;s strategic growth initiatives,
                                business development, and product innovation
                                efforts. He brings with him profound technical
                                knowledge and 25 years of rich experience.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href="https://www.linkedin.com/in/sehgalrohit/"
                            >
                                LinkedIn Profile
                            </Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleModal2}>
                <Modal.Body>
                    <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src="/about/Rohit.png" />
                        <Card.Body>
                            <Card.Title>Sriram Nallam</Card.Title>
                            <Card.Text>
                                Sriram, in his role as Chairman, manages and
                                oversees all aspects of Seanergy&apos;s
                                strategic growth initiatives, business
                                development, and product innovation efforts. He
                                brings with him profound technical knowledge and
                                25 years of rich experience.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href="https://www.linkedin.com/in/sriramnallam/"
                            >
                                LinkedIn Profile
                            </Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
            <Footer />
        </>
    );
};

export default About;
