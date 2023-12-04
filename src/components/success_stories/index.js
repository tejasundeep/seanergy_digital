import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";

const successStoriesData = [
    {
        title: "Transit and Transportation",
        description:
            "A transportation company finding new paths to gain unified access into all the segregated data.",
        link: "Keolis_Casestudy.html",
    },
    {
        title: "Redefining Driver Retention",
        description:
            "How a large shipping company overcame the industry's biggest problem, driver retention.",
        link: "Driversync_casestudy.html",
    },
];

const SuccessStories = () => {
    return (
        <div className={styles["success-stories"]}>
            <Container className="z-1 pb-5 pt-2">
                <div className={styles["success-stories__heading"]}>
                    <h1 className={styles["success-stories__title"]}>Our Success Stories</h1>
                    <p className={styles["success-stories__subtitle"]}>Quality never goes out of style</p>
                </div>

                <Row className="pb-4">
                    {successStoriesData.map((story, index) => (
                        <Col lg={6} md={6} sm={6} key={index}>
                            <h1 className={styles["success-stories__story-title"]}>{story.title}</h1>
                            <p className={styles["success-stories__story-desc"]}>{story.description}</p>
                            <a href={story.link} className={styles["success-stories__link"]}>Read Success Stories</a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default SuccessStories;
