import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const testimonialData = [
    {
        title: "IT Director, Logistics Group",
        text: "Seanergy has a great team of programmers with a can-do attitude. They have done a great job for us and we will continue to use their services.",
        image: "/Client.png",
        link: "/testimonials"
    },
    {
        title: "Founder & Owner of Top Family Tree Networking",
        text: "Seanergy has a great team of programmers with a can-do attitude. They have done a great job for us and we will continue to use their services.",
        image: "/Client.png",
        link: "/testimonials"
    },
    {
        title: "VP IT, Marketing & Promotions Company",
        text: "Seanergy has been a wonderful partner. Picking up the pieces from a previous partner of ours, Seanergy worked hard to understand the complexities of our systems...",
        image: "/Client.png",
        link: "/testimonials"
    }
];

const Testimonials = () => {
    return (
        <section className={styles["testimonial"]}>
            <Container>
                <Row>
                    <Col md={7} className="mx-auto">
                        <h2>Testimonials</h2>
                        <p>What our customers say about our work</p>
                        <Card className="pt-4 p-3">
                            <Carousel
                                indicators={false}
                                controls={false}
                                interval={3000}
                                slide={true}
                            >
                                {testimonialData.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <Image src={item.image} width={84} height={84} layout="fixed" alt="Client" />
                                        <h3>
                                            <Link href={item.link}>{item.title}</Link>
                                        </h3>
                                        <p className={styles["testimonial-text"]}>{item.text}</p>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
