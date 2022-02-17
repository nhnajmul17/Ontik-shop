import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import Products from '../../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BannerSlider></BannerSlider>


        </div>
    );
};

export default Home;