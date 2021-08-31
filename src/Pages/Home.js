import React from 'react';
import Banner from "../Components/Banner";
import Layout from "../Components/Layout";
import FeatureCategory from "../Components/FeatureCategory";
import FeatureProduct from "../Components/FeatureProduct";
import OfferProduct from "../Components/OfferProduct";
import PeopleReview from "../Components/PeopleReview";
import Brand from "../Components/Brand";

const Home = () => {
    return (
        <Layout>
            <div className="container">
                <Banner/>
                <FeatureCategory/>
                <FeatureProduct/>
                <OfferProduct/>
                <PeopleReview/>
                <Brand/>
            </div>
        </Layout>
    );
};

export default Home;