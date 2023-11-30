import styles from "@/styles/Home.module.scss";
import Image from "next/legacy/image";

const Banner = ({ bannerText }) => {
    const blurDataUrl = (bannerText.image);

    return (
        <section className={styles.banner}>
            <Image src={bannerText.image} alt="Banner" layout="fill" blurDataURL={blurDataUrl} placeholder="blur" objectFit="cover" quality={100} priority />
            <div className={bannerText.align}>
                <h3 className="pb-4" dangerouslySetInnerHTML={{ __html: bannerText.title && bannerText.title }} />
                <p className="my-4">{bannerText.description && bannerText.description}</p>
                <a className='btn btn-primary' href={bannerText.link}>Know More</a>
            </div>
        </section>
    );
};

export default Banner;
