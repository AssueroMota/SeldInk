import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BannerPortfolio from "./BannerPortfolio/BannerPortfolio";
import Select from "./SelectFilter/Select";

const Portfolio = () => {
    return (
        <>
            <Header />
            <BannerPortfolio />
            <Select/>
            <Footer />
        </>
    );
};

export default Portfolio;
