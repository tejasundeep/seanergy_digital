import React, { useMemo } from 'react';
import HeadComponent from "@/components/head";
import NavBar from "@/components/navbar";
import Banner from "@/components/banner";

const Home = () => {
    const bannerData = useMemo(() => ({
        image: "/banners/home.jpg",
        title: "Partner in empowering your <br />digital business",
        description: "Transform your business through our IT services",
        link: "/",
        align: "text-center",
    }), []);

    return (
        <>
            <HeadComponent />
            <main>
                <NavBar />
                <Banner bannerText={bannerData} />
                
            </main>        
        </>
    );
};

export default Home;
