import MetaData from "@/components/head";
import NavBar from "@/components/navbar";
import Banner from "@/components/banner";
import Industries from "@/components/industries";
import OurOfferings from "@/components/offers";
import CoreValues from "@/components/core_values";
import SuccessStories from "@/components/success_stories";
import Certifications from "@/components/certifications";
import Testimonials from "@/components/testimonal";
import Footer from "@/components/footer";

const Home = () => {
    const bannerData = {
        image: "/banners/home.jpg",
        title: "Partner in empowering your <br />digital business",
        description: "Transform your business through our IT services",
        link: "/",
        align: "text-center",
    };

    const metaInfo = {
        title: ":: Empowering Digital Business ::",
        desc: "Seanergy Digital Services Empowering Digital Business is the No 1 provider of integrated business, technology, consulting, testing and process solutions on a global delivery platform",
        keywords: "Business Intelligence, Balanced Scorecard, Data Marts, Data Warehouse, Online Analytical Processing, Strategic Business Intelligence, Measure\Fact, Hierarchy dimension, Reports, KPI, ETL, Forecasting, Cube, ASP.Net MVC Framework, LINQ, Web services, Client-side web development technologies, Bootstrap,  Business Intelligence tools, BI Analytics, Open Source Business Intelligence, IT Services, IT Consulting, Product Engineering Solutions, Technology Infrastructure Services, Business Process Outsourcing, Business Process Transformation, Consulting Services, Customer Experience, security solutions, storage solutions, Business Objects, Business Solutions, ASP.NET, ASP.NET MVC, ASP.NET MVC4, ASP.NET Web API, Angularjs, jQuery, SQL Server, SharePoint, MSBL, data mining, Predictive Analytics, Data & Analytics, Digital Tranformation, Quality Assurance, Buisness Intellegence, Cognitive Abilities, Logistics, Transportation, Healthcare, Offshore Product development, Supply chain, Domain Consulting, Product Engineering, Mobility, Driver Sync, Uniview, Ugethelp, Rohit Sehgal, Sriram Nallam, Seanergy Digital, Seanergy Softech, Seanergy Consulting Services, Reengineering, Web App Development, Mobile App Development, Enterprise App Development, UI/UX Services, Legacy Modernization, Cloud Technologies, Data Strategy, Data Integration, Big Data, Predictive Analytics, Test Automation, Functional Testing, Mobile App Testing, Securing Testing, Performance Testing, Web Services/API Testing, Big Data/Analytics Testing, DevOps, Machine Learning, Natural Language Processing, Internet of things (IoT), Intelligent Chat Bots, Build Operate and Transfer (BOT), Staff Augmentation, IT implementation, Dispatch Control System, Shipment Tracking System, Incident Managment System",
    };

    return (
        <>
            <MetaData metaInfo={metaInfo} />
            <main>
                <NavBar />
                <Banner bannerText={bannerData} />
                <Industries />
                <OurOfferings />
                <SuccessStories />
                <CoreValues />
                <Certifications />
                <Testimonials />
                <Footer />
            </main>
        </>
    );
};

export default Home;
