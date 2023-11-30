import HeadComponent from "@/components/head";
import NavBar from "@/components/navbar";
import styles from '@/styles/Home.module.css'

const Home = () => {
    return (
        <>
            <HeadComponent />
            <main className={styles['main']}>
                <NavBar />
            </main>        
        </>
    );
};

export default Home;
