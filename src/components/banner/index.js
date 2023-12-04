import React, { useMemo } from 'react';
import styles from "@/styles/Home.module.scss";
import Image from "next/legacy/image";

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
            <div className={`${styles.banner__content} ${bannerText.align}`}>
                <h3 className={styles.banner__title} dangerouslySetInnerHTML={{ __html: bannerText.title && bannerText.title }} />
                <p className={styles.banner__description}>{bannerText.description && bannerText.description}</p>
                <a className={`${styles.banner__button} btn btn-primary`} href={bannerText.link}>Know More</a>
            </div>
        </section>
    );
});

Banner.displayName = 'Banner';

export default Banner;
