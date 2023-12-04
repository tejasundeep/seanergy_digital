import React, { useMemo } from 'react';
import styles from "@/styles/Home.module.scss";
import Image from "next/legacy/image";
import { Col, Container, Row } from 'react-bootstrap';

const Banner = React.memo(({ bannerText }) => {
    const blurDataUrl = useMemo(() => bannerText.image, [bannerText.image]);

    return (
        <section className={styles.banner}>
            <Image 
                src={bannerText.image} 
                alt="Banner" 
                layout="fill" 
                blurDataURL={blurDataUrl} 
                placeholder="blur" 
                objectFit="cover" 
                quality={100} 
                priority 
            />
            <Container>
                <Row>
                    <Col>
                    <div className={`${styles.banner__content} ${bannerText.align}`}>
                        <h3 className={styles.banner__title} dangerouslySetInnerHTML={{ __html: bannerText.title && bannerText.title }} />
                        {bannerText.description && <p className={styles.banner__description}>{bannerText.description}</p>}
                        {bannerText.link && <a className={`${styles.banner__button} btn btn-primary`} href={bannerText.link}>Know More</a>}
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
});

Banner.displayName = 'Banner';

export default Banner;
