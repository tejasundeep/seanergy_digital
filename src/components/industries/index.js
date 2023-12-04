import styles from "@/styles/Home.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const Industries = () => {
    return (
        <section className={styles["industries"]}>
            <h1>Industries</h1>
            <Container className="pt-3">
                <Row>
                    <Col sm="12" md="5" className={styles["industries__col"]}>
                        <Link href="">
                            <Card className={styles["industries__col__transport"]}>
                                <Card.Body className={styles["industries__col__transport__body"]}>
                                    <Card.Title>Transportation</Card.Title>
                                    <Card.Text>
                                        Solutions to enhance existing business strategies to foster better services, agility, and profit for Business transformation
                                    </Card.Text>
                                </Card.Body>
                                <Card.ImgOverlay className="d-flex align-items-end" />
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="7" className={styles["industries__col"]}>
                        <Link href="">
                            <Card className={styles["industries__col__healthcare"]}>
                                <Card.Body className={styles["industries__col__healthcare__body"]}>
                                    <Card.Title>Healthcare</Card.Title>
                                    <Card.Text>
                                        Building better and quality oriented applications which help in improving patient care, reducing complexity and empowering healthcare decision makers through technology
                                    </Card.Text>
                                </Card.Body>
                                <Card.ImgOverlay className="d-flex align-items-end" />
                            </Card>
                        </Link>
                        <Link href="">
                            <Card className={styles["industries__col__development"]}>
                                <Card.Body className={styles["industries__col__development__body"]}>
                                    <Card.Title>Offshore Product Development</Card.Title>
                                    <Card.Text>
                                        ODC services with better delivery speed and service quality for providing best in industry, web, and software development services with minimum costs
                                    </Card.Text>
                                </Card.Body>
                                <Card.ImgOverlay className="d-flex align-items-end" />
                            </Card>
                        </Link>

                    </Col>
                    <Col md="12" className={styles["industries__col"]}>
                        <Link href="">
                            <Card className={styles["industries__col__logistics"]}>
                                <Card.Body className={styles["industries__col__logistics__body"]}>
                                    <Card.Title>Transportation</Card.Title>
                                    <Card.Text>
                                        Solutions to enhance existing business strategies to foster better services, agility, and profit for Business transformation
                                    </Card.Text>
                                </Card.Body>
                                <Card.ImgOverlay className="d-flex align-items-end" />
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Industries;
