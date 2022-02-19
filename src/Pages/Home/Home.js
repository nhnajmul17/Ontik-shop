import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import Products from '../../Components/Products/Products';
import UpComing from '../../Components/UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Products></Products>
            <Banner></Banner>
            <UpComing></UpComing>


        </div>
    );
};

export default Home;