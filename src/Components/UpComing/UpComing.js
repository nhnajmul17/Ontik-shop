import React from 'react';
import Slider from "react-slick";
import img1 from '../../Images/1.JPG'
import img2 from '../../Images/2.JPG'
import img3 from '../../Images/3.JPG'
import img4 from '../../Images/4.JPG'
import img5 from '../../Images/5.JPG'
import img6 from '../../Images/6.JPG'
import img7 from '../../Images/7.JPG'

const UpComing = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='p-5'>
            <h3 className='fw-bold'>Upcoming Products</h3>
            <Slider {...settings}>
                <img className='p-5 rounded-circle' src={img1} alt="" />
                <img className='p-5 rounded-circle' src={img2} alt="" />
                <img className='p-5 rounded-circle' src={img3} alt="" />
                <img className='p-5 rounded-circle' src={img4} alt="" />
                <img className='p-5 rounded-circle' src={img6} alt="" />
                <img className='p-5 rounded-circle' src={img5} alt="" />
                <img className='p-5 rounded-circle' src={img7} alt="" />
            </Slider>

        </div>
    );
};

export default UpComing;